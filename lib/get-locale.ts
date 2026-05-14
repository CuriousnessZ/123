import { cookies } from "next/headers";

import { normalizeLocale, type Locale, LOCALE_COOKIE_NAME } from "@/lib/i18n";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  return normalizeLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);
}
