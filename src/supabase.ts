import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseUrl = "https://arxfheangcrreswypwcc.supabase.co";
const supabaseAnonKey = "sb_publishable_BfXQvxkCe2Oc4Odv085qrw_aKifLN9U";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
