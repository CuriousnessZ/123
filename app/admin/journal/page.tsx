import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/animated-section";
import { ManufacturingJournalAdmin } from "@/components/manufacturing-journal-admin";
import {
  getAdminPasswordSource,
  getAdminRecoveryInstructions,
  getAuthenticatedAdmin,
  isAdminAuthConfigured,
} from "@/lib/admin-session";
import { getStoredJournalPosts } from "@/lib/journal-store";
import { getSupabaseConfig } from "@/lib/supabase-env";

export const metadata: Metadata = {
  title: "Journal Admin",
  description:
    "Admin-only manufacturing journal scaffold with Supabase-ready posting workflow, draft/publish control, uploads, and rich text editing.",
};

export default async function ManufacturingJournalAdminPage() {
  const admin = await getAuthenticatedAdmin();

  if (!admin) {
    redirect("/admin/login?next=/admin/journal");
  }

  const { isConfigured, adminEmails } = getSupabaseConfig();
  const posts = await getStoredJournalPosts();
  const recovery = getAdminRecoveryInstructions();

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
            This admin route is protected by a signed session and reserved for
            internal publishing. Post status, pinning, image uploads, gallery
            uploads, and video publishing all stay behind the admin wall rather
            than being exposed on the public browsing experience.
          </p>
          {!isAdminAuthConfigured() ? (
            <p className="mt-4 text-sm text-amber-300">
              Set `JOURNAL_ADMIN_PASSWORD` and `JOURNAL_ADMIN_SESSION_SECRET`
              before using this admin channel.
            </p>
          ) : null}
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ManufacturingJournalAdmin
          posts={posts}
          isSupabaseConfigured={isConfigured}
          adminEmails={adminEmails}
          adminUsername={admin.username}
          passwordSource={getAdminPasswordSource()}
          recoveryInfo={recovery}
        />
      </AnimatedSection>
    </main>
  );
}
