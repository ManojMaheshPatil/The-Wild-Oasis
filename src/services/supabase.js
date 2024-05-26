import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sngmbkqgtpxnmipzdjcl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuZ21ia3FndHB4bm1pcHpkamNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5MjY2NzEsImV4cCI6MjAyNDUwMjY3MX0.wIAdNY21fBHk6jZFFcXFs06HgtxtDJJKkQktcRR2Zlc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
