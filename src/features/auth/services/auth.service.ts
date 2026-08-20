// Auth & Profile Management Service
import { supabase } from '@/integrations/supabase/client';
import { UserProfile } from '@/core/types';

export const authService = {
  async getProfile(profileId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', profileId)
        .maybeSingle();

      if (error || !data) return null;
      return data as UserProfile;
    } catch {
      return null;
    }
  },

  async createProfile(name: string): Promise<UserProfile> {
    const { data, error } = await supabase
      .from('user_profiles')
      .insert({ name: name.trim() })
      .select()
      .single();

    if (error || !data) {
      throw error || new Error('Failed to create profile');
    }

    return data as UserProfile;
  },

  saveProfileLocal(profile: UserProfile | null) {
    if (profile) {
      localStorage.setItem('user_profile_id', profile.id);
    } else {
      localStorage.removeItem('user_profile_id');
    }
  }
};
