import { createClient } from "@supabase/supabase-js";

let client;
export function authClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Supabase login is not configured. Add the environment variables from RECRUITMENT-SETUP.md.");
  if (!client) client = createClient(url, key);
  return client;
}

export async function apiRequest(url, options = {}, admin = false) {
  const headers = { ...options.headers };
  if (admin) {
    const { data: { session } } = await authClient().auth.getSession();
    if (!session) throw new Error("Please sign in to continue.");
    headers.Authorization = `Bearer ${session.access_token}`;
  }
  if (options.body && !(options.body instanceof FormData)) headers["Content-Type"] = "application/json";
  const response = await fetch(url, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Request failed. Please try again.");
  return data;
}
