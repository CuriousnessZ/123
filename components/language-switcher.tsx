"use client";

import type { Locale } from "@/lib/i18n";
import { LOCALE_COOKIE_NAME } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  function changeLocale(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  }

  return (
    <div className="inline-flex items-center rounded-full border border-stone-200 bg-white/90 p-1 text-xs font-semibold text-stone-700">
      <button
        type="button"
        onClick={() => changeLocale("zh")}
        className={`rounded-full px-3 py-1.5 transition ${
          locale === "zh"
            ? "bg-stone-900 text-white"
            : "text-stone-600 hover:text-stone-950"
        }`}
      >
        中文
      </button>
      <button
        type="button"
        onClick={() => changeLocale("en")}
        className={`rounded-full px-3 py-1.5 transition ${
          locale === "en"
            ? "bg-stone-900 text-white"
            : "text-stone-600 hover:text-stone-950"
        }`}
      >
        EN
      </button>
    </div>
  );
}
