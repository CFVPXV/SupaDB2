import { createClient } from '@supabase/supabase-js';


// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://mprtwhngftpzfduaxpbi.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcnR3aG5nZnRwemZkdWF4cGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1OTkxNzMsImV4cCI6MjAxNDE3NTE3M30.dQaxxUbK5M_cb1ZVwNprju_AMpRdjrLQBNN7Kb0kbEQ');
