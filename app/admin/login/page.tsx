import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { AdminLoginForm } from "@/components/admin-login-form";
import {
  getAdminRecoveryInstructions,
  getAuthenticatedAdmin,
  isAdminAuthConfigured,
} from "@/lib/admin-session";

type PageProps = {
  searchParams: Promise<{
    next?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Journal Admin Login",
  description: "Protected sign-in page for the manufacturing journal admin.",
};

export default async function AdminLoginPage({ searchParams }: PageProps) {
  const [{ next }, admin] = await Promise.all([
    searchParams,
    getAuthenticatedAdmin(),
  ]);
  const recovery = getAdminRecoveryInstructions();

  return (
    <main className="min-h-screen bg-[#fbf8f4]">
      <AnimatedSection className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 py-16 md:px-8">
        <div className="mx-auto w-full max-w-xl rounded-[2.4rem] border border-stone-200 bg-white p-8 shadow-[0_28px_90px_rgba(18,16,12,0.08)] md:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
            Admin Access
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            Sign in to the protected journal publishing channel.
          </h1>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Public visitors no longer see the publishing controls. Only an
            authenticated admin session can open the journal backend, publish
            stories, and upload cover images, gallery media, or videos.
          </p>

          {!isAdminAuthConfigured() ? (
            <div className="mt-8 rounded-[1.6rem] border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
              Configure `JOURNAL_ADMIN_PASSWORD` and
              `JOURNAL_ADMIN_SESSION_SECRET` in your environment before using
              this page.
            </div>
          ) : (
            <AdminLoginForm
              nextPath={next || "/admin/journal"}
              isAlreadyAuthenticated={Boolean(admin)}
            />
          )}

          <div className="mt-6 rounded-[1.4rem] border border-stone-200 bg-[#fcfaf7] p-4 text-sm leading-7 text-stone-600">
            <p className="font-semibold text-stone-950">Forgot password?</p>
            <p className="mt-2">
              Delete `data/admin-auth.json` to return to the password stored in
              `.env.local`, then restart the dev server.
            </p>
            <p className="mt-2">Stored password file: {recovery.storedPasswordPath}</p>
          </div>

          <div className="mt-8 text-sm text-stone-500">
            <Link href="/about-us" className="font-semibold text-stone-900">
              Back to Journal
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
