import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://etvrbadwfobfarwurfzq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_SSyVmBp369I5YxfKgJdA7Q_M8nUI4bE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
