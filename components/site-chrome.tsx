import Link from "next/link";
import { ArrowRight, MessageCircleMore } from "lucide-react";

import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n";
import { createTranslator } from "@/lib/i18n";
import { getLocalizedSiteData } from "@/lib/localized-site-data";
import { whatsappNumber } from "@/lib/site-data";

const headerNavItems = [
  { label: "Home", href: "/" },
  { label: "Explore Our Innovation", href: "/#explore" },
  { label: "Collections", href: "/collections" },
  { label: "Journal", href: "/about-us" },
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = createTranslator(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[rgba(247,242,236,0.58)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
            HT
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
              {t("Premium Textile")}
            </p>
            <p className="text-sm font-semibold text-stone-900">
              {t("Home Textiles")}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {headerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 transition hover:text-stone-950"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link
            href="/contact"
            className="hidden text-sm text-stone-600 transition hover:text-stone-950 lg:inline-flex"
          >
            {t("Contact")}
          </Link>
          <Link href="/contact#inquiry" className="button-primary px-4 md:px-5">
            {t("Request Quote")}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = createTranslator(locale);
  const { footerLinks, navItems } = getLocalizedSiteData(locale);

  return (
    <footer className="border-t border-stone-200 bg-[#f5efe8]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
            {t("Premium Textile Manufacturing")}
          </p>
          <h2 className="max-w-xl text-3xl font-semibold text-stone-900 md:text-4xl">
            {t(
              "Designed for high-trust B2B inquiries and long-term global cooperation."
            )}
          </h2>
          <Link href="/contact#inquiry" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900">
            {t("Start your custom collection")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold text-stone-900">{t("Navigation")}</p>
            <div className="space-y-3 text-sm text-stone-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block transition hover:text-stone-950">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-stone-900">{t("Connect")}</p>
            <div className="space-y-3 text-sm text-stone-600">
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:text-stone-950"
                >
                  {item.label}
                </a>
              ))}
              <p>{t("Certifications: OEKO-TEX, GOTS, ISO9001, BSCI")}</p>
              <p>
                Copyright {new Date().getFullYear()} {t("Premium Home Textiles")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp({ locale }: { locale: Locale }) {
  const t = createTranslator(locale);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(15,14,12,0.25)] transition hover:-translate-y-1 hover:bg-stone-800 md:bottom-5 md:right-5 md:px-5"
    >
      <MessageCircleMore className="h-4 w-4" />
      <span className="hidden sm:inline">{t("Chat With Textile Specialist")}</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
