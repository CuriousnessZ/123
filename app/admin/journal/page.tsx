import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { ManufacturingJournalAdmin } from "@/components/manufacturing-journal-admin";
import { manufacturingJournalPosts } from "@/lib/manufacturing-journal";
import { getSupabaseConfig } from "@/lib/supabase-env";

export const metadata: Metadata = {
  title: "Journal Admin",
  description:
    "Admin-only manufacturing journal scaffold with Supabase-ready posting workflow, draft/publish control, uploads, and rich text editing.",
};

export default function ManufacturingJournalAdminPage() {
  const { isConfigured, adminEmails } = getSupabaseConfig();

  return (
    <main className="bg-[#fbf8f4]">
      <section className="bg-stone-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.34em] text-white/55">
            Admin Journal
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            A premium publishing backend scaffold for industrial documentary storytelling.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            This admin route is prepared for Supabase Auth, database-backed post
            storage, image uploads, video embedding, and role-restricted
            publishing. It keeps the same dark-and-white visual language as the
            public journal so the whole experience feels like one coherent
            system.
          </p>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ManufacturingJournalAdmin
          posts={manufacturingJournalPosts}
          isSupabaseConfigured={isConfigured}
          adminEmails={adminEmails}
        />
      </AnimatedSection>
    </main>
  );
}
