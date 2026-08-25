import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { UserProfile } from '@/core/types';
import { supabase } from '@/integrations/supabase/client';
import { calculateProfileCompletion } from '@/lib/profile-utils';

interface UserContextType {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
  loginWithPhone: (phone: string) => Promise<{ profile: UserProfile; isExisting: boolean }>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<UserProfile>;
  logout: () => void;
  isLoading: boolean;
  profileCompletion: number;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem('user_profile');
      if (stored) return JSON.parse(stored);
    } catch {
      // Ignored for privacy
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = useCallback(async (profileId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', profileId)
        .maybeSingle();

      if (data && !error) {
        const stored = localStorage.getItem('user_profile');
        const localParsed = stored ? JSON.parse(stored) : {};
        const merged = { ...localParsed, ...data };
        setUserProfile(merged);
        localStorage.setItem('user_profile', JSON.stringify(merged));
      }
    } catch {
      // Silent fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const storedProfile = localStorage.getItem('user_profile');
    const storedProfileId = localStorage.getItem('user_profile_id');

    if (storedProfile) {
      try {
        const parsed = JSON.parse(storedProfile);
        setUserProfile(parsed);
        setIsLoading(false);
      } catch {
        // continue to fetch
      }
    }

    if (storedProfileId) {
      fetchUserProfile(storedProfileId);
    } else {
      setIsLoading(false);
    }
  }, [fetchUserProfile]);

  const handleSetUserProfile = (profile: UserProfile | null) => {
    setUserProfile(profile);
    if (profile) {
      localStorage.setItem('user_profile_id', profile.id);
      localStorage.setItem('user_profile', JSON.stringify(profile));

      if (profile.phone) {
        try {
          const registryRaw = localStorage.getItem('career_nav_profiles_registry');
          const registry = registryRaw ? JSON.parse(registryRaw) : {};
          registry[profile.phone] = profile;
          localStorage.setItem('career_nav_profiles_registry', JSON.stringify(registry));
        } catch {
          // ignore
        }
      }
    } else {
      localStorage.removeItem('user_profile_id');
      localStorage.removeItem('user_profile');
    }
  };

  const loginWithPhone = async (rawPhone: string): Promise<{ profile: UserProfile; isExisting: boolean }> => {
    const phone = rawPhone.trim().replace(/[^\d+]/g, '');

    // 1. Check multi-user local registry
    let localRegistry: Record<string, UserProfile> = {};
    try {
      const localRegistryRaw = localStorage.getItem('career_nav_profiles_registry');
      if (localRegistryRaw) localRegistry = JSON.parse(localRegistryRaw);
    } catch {
      localRegistry = {};
    }

    // 2. Query Supabase for existing user with this phone
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('phone', phone)
        .maybeSingle();

      if (data && !error) {
        const localCached = localRegistry[phone];
        const finalName = data.name || localCached?.name || 'User';
        const merged: UserProfile = { ...localCached, ...data, phone, name: finalName };
        handleSetUserProfile(merged);
        return { profile: merged, isExisting: true };
      }
    } catch {
      // Offline fallback
    }

    // 3. Check local registry fallback
    if (localRegistry[phone]) {
      const existing = localRegistry[phone];
      if (!existing.name) {
        existing.name = 'User';
      }
      handleSetUserProfile(existing);
      return { profile: existing, isExisting: true };
    }

    // 4. Create new user profile with this phone and default name 'User'
    const newProfile: UserProfile = {
      id: `local-${Date.now()}`,
      name: 'User',
      phone: phone,
      created_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .insert({
          name: newProfile.name,
          phone: newProfile.phone || null,
        })
        .select()
        .single();

      if (data && !error) {
        newProfile.id = data.id;
      }
    } catch {
      // Offline / local resilience
    }

    handleSetUserProfile(newProfile);
    return { profile: newProfile, isExisting: false };
  };

  const updateUserProfile = async (updates: Partial<UserProfile>): Promise<UserProfile> => {
    const current = userProfile || {
      id: `local-${Date.now()}`,
      name: 'User',
      created_at: new Date().toISOString(),
    };

    const merged: UserProfile = {
      ...current,
      ...updates,
      updated_at: new Date().toISOString(),
    };

    const completion = calculateProfileCompletion(merged);
    merged.profile_completion_percentage = completion;

    handleSetUserProfile(merged);

    // Optional background sync to Supabase
    try {
      await supabase
        .from('user_profiles')
        .update({
          name: merged.name,
          phone: merged.phone || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', merged.id);
    } catch {
      // Ignored for localStorage-first resilience
    }

    return merged;
  };

  const logout = () => {
    setUserProfile(null);
    localStorage.removeItem('user_profile');
    localStorage.removeItem('user_profile_id');
  };

  const profileCompletion = userProfile
    ? calculateProfileCompletion(userProfile)
    : 0;

  return (
    <UserContext.Provider
      value={{
        userProfile,
        setUserProfile: handleSetUserProfile,
        loginWithPhone,
        updateUserProfile,
        logout,
        isLoading,
        profileCompletion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
