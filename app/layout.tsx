import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import {
  FloatingWhatsApp,
  SiteFooter,
  SiteHeader,
} from "@/components/site-chrome";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premium-home-textiles.example"),
  title: {
    default: "Premium Custom Home Textiles for Global Brands",
    template: "%s | Premium Home Textiles",
  },
  description:
    "Luxury B2B home textile OEM and ODM website for bedding, towels, curtains, hotel textiles, and private-label manufacturing.",
  keywords: [
    "home textile OEM",
    "home textile ODM",
    "custom bedding manufacturer",
    "private label towels supplier",
    "premium textile factory",
    "hotel textile supplier",
  ],
  openGraph: {
    title: "Premium Custom Home Textiles for Global Brands",
    description:
      "A premium international B2B textile manufacturing partner for custom bedding, towels, curtains, and hotel textile programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#fbf8f4] text-stone-900">
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
