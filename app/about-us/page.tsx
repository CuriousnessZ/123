import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Pin, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { ManufacturingJournalFeed } from "@/components/manufacturing-journal-feed";
import {
  featuredManufacturingJournalPost,
  formatJournalDate,
  manufacturingJournalTags,
  publishedManufacturingJournalPosts,
} from "@/lib/manufacturing-journal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Industrial documentary style manufacturing journal for a premium home textile factory, featuring projects, workflows, QC, and shipment storytelling.",
};

const journalStats = [
  { value: "Pinned", label: "Featured project at the top of the feed" },
  { value: "Dark / White", label: "Consistent editorial theme with cinematic contrast" },
  { value: "Infinite", label: "Scrollable story feed with tag filtering" },
];

export default function ManufacturingJournalPage() {
  return (
    <main className="bg-[#fbf8f4]">
      <section className="relative min-h-[92vh] overflow-hidden bg-stone-950 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          src="/video(4).mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.2),rgba(10,10,10,0.82))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_24%)]" />

        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl items-end px-5 py-16 md:px-8 md:py-20">
          <div className="w-full space-y-10">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.34em] text-white/55">
                About Us
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl md:leading-[1.02]">
                A modern manufacturing journal for a premium home textile factory.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                Built with an industrial documentary aesthetic, this page turns
                the factory into an editorial story: real projects, process
                moments, quality checkpoints, shipment logic, and the rhythm of
                production itself.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="#featured-project" className="button-primary">
                  Explore Featured Story
                </Link>
                <Link href="/admin/journal" className="button-secondary border-white/25 bg-white/10 text-white hover:bg-white/16">
                  Open Admin Scaffold
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {journalStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.7rem] border border-white/12 bg-white/8 p-5 backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection
        id="featured-project"
        className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-stone-500">
          <Pin className="h-4 w-4" />
          Pinned Featured Project
        </div>
        <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-[0_28px_90px_rgba(18,16,12,0.08)]">
          <div className="flex flex-col">
            <div className="relative min-h-[420px] overflow-hidden bg-stone-950">
              {featuredManufacturingJournalPost.videoUrl ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                  src={featuredManufacturingJournalPost.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${featuredManufacturingJournalPost.coverAccent}`}
                />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.72))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur">
                Featured Story
              </div>
            </div>
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-500">
                <span>{featuredManufacturingJournalPost.coverLabel}</span>
                <span>{formatJournalDate(featuredManufacturingJournalPost.publishedAt)}</span>
                <span>{featuredManufacturingJournalPost.readTime}</span>
              </div>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
                {featuredManufacturingJournalPost.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600">
                {featuredManufacturingJournalPost.heroSummary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredManufacturingJournalPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-200 bg-[#f7f2ec] px-3 py-1 text-xs text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {featuredManufacturingJournalPost.metrics.slice(0, 4).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.5rem] border border-stone-200 bg-[#fcfaf7] p-4"
                  >
                    <p className="text-sm font-semibold text-stone-950">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-stone-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href={`/about-us/${featuredManufacturingJournalPost.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-stone-900"
              >
                Read Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#f7f2ec] py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="space-y-10">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
                Manufacturing Feed
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
                Scroll through factory stories with a cinematic editorial rhythm.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-stone-600">
                Inspired by Medium, LinkedIn, and Apple-style manufacturing
                storytelling, the feed emphasizes process clarity, material
                quality, and shipment realism while keeping the premium site
                language intact.
              </p>
              <div className="mt-8 rounded-[1.8rem] border border-stone-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-stone-900" />
                  <p className="text-sm font-semibold text-stone-950">
                    Journal system scaffold
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Public reading experience is ready now. Admin-only posting,
                  image uploads, video embedding, drafts, pinned stories, and
                  Supabase-based publishing are scaffolded in the admin route.
                </p>
              </div>
            </div>

            <ManufacturingJournalFeed
              posts={publishedManufacturingJournalPosts}
              tags={manufacturingJournalTags}
            />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
