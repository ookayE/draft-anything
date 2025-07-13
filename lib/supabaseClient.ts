import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseURL || !supabaseAnonKey) {
  throw new Error("Something's not right.");
}

export const supabase = createClient(supabaseURL, supabaseAnonKey);
