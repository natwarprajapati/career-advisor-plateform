// Core Global Domain Types

export type ExperienceLevel = 'fresher' | 'junior' | 'mid' | 'senior' | 'lead';

export interface UserEducation {
  degree?: string;
  institution?: string;
  field?: string;
  gradYear?: string;
  grade?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  location?: string;
  headline?: string;
  avatar_url?: string;
  experience_level?: ExperienceLevel;
  current_company?: string;
  current_role?: string;
  years_of_experience?: number;
  notice_period?: string;
  current_ctc?: string;
  skills?: string[];
  domain?: string;
  preferred_job_types?: string[];
  preferred_locations?: string[];
  expected_salary?: string;
  education?: UserEducation;
  resume_url?: string;
  resume_name?: string;
  has_uploaded_resume?: boolean;
  linkedin_url?: string;
  github_url?: string;
  portfolio_url?: string;
  profile_completion_percentage?: number;
  onboarding_completed?: boolean;
  created_at: string;
  updated_at?: string;
}

export interface StoredResume {
  id: string;
  user_profile_id: string;
  title: string;
  type: 'created' | 'uploaded';
  content?: Record<string, unknown> | null;
  file_url?: string | null;
  created_at: string;
  updated_at?: string;
}

export interface StoredJob {
  id: string;
  user_profile_id: string;
  job_title: string;
  company: string;
  description?: string | null;
  cover_letter?: string | null;
  applied_at: string;
  status: 'applied' | 'interviewing' | 'offered' | 'rejected';
}

export interface StoredResource {
  id: string;
  user_profile_id: string;
  topic: string;
  title: string;
  url?: string | null;
  description?: string | null;
  enrolled_at: string;
}

export interface StoredChatHistory {
  id: string;
  user_profile_id: string;
  title: string;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  created_at: string;
  updated_at: string;
}
