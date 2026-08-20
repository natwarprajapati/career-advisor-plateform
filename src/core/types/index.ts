// Core Global Domain Types

export interface UserProfile {
  id: string;
  name: string;
  created_at: string;
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
