export function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const adminEmails =
    process.env.NEXT_PUBLIC_JOURNAL_ADMIN_EMAILS?.split(",")
      .map((email) => email.trim())
      .filter(Boolean) ?? [];

  return {
    url,
    anonKey,
    adminEmails,
    isConfigured: Boolean(url && anonKey),
  };
}
