// Environment Configuration & Safe Access Layer
 
export const ENV = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || 'https://vhwwofnhsohqxfkxqzrq.supabase.co',
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '',
} as const;

