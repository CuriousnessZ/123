import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/animated-section";
import {
  formatJournalDate,
  getLocalizedJournalData,
  getLocalizedJournalPostBySlug,
} from "@/lib/localized-journal";
import { getLocale } from "@/lib/get-locale";
import { createTranslator } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    postSlug: string;
  }>;
};

export async function generateStaticParams() {
  const { publishedPosts } = await getLocalizedJournalData("en");
  return publishedPosts.map((post) => ({
    postSlug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { postSlug } = await params;
  const post = await getLocalizedJournalPostBySlug("en", postSlug);

  if (!post || post.status !== "published") {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ManufacturingJournalDetailPage({
  params,
}: PageProps) {
  const { postSlug } = await params;
  const locale = await getLocale();
  const t = createTranslator(locale);
  const post = await getLocalizedJournalPostBySlug(locale, postSlug);

  if (!post || post.status !== "published") {
    notFound();
  }

  return (
    <main className="bg-[#fbf8f4]">
      <section className="overflow-hidden bg-stone-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="space-y-10">
            <div className="max-w-4xl">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/72 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("Back to Journal")}
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/55">
                <span>{post.coverLabel}</span>
                <span>{formatJournalDate(locale, post.publishedAt)}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                {post.heroSummary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2.4rem] border border-white/10">
              {post.videoUrl ? (
                <video
                  className="h-full min-h-[420px] w-full object-cover"
                  src={post.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : post.coverImageUrl ? (
                <img
                  className="h-full min-h-[420px] w-full object-cover"
                  src={post.coverImageUrl}
                  alt={post.title}
                />
              ) : (
                <div
                  className={`min-h-[420px] bg-gradient-to-br ${post.coverAccent}`}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
              {t("Project Overview")}
            </p>
            <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
              {post.overview}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {post.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.5rem] border border-stone-200 bg-[#f7f2ec] p-4"
                >
                  <p className="text-2xl font-semibold text-stone-950">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-stone-500">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-[#f7f2ec] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
              {t("Story Blocks")}
            </p>
            <div className="mt-6 space-y-6">
              {post.storyBlocks.map((block) => (
                <div
                  key={block.heading}
                  className="rounded-[1.5rem] border border-stone-200 bg-white p-5"
                >
                  <h2 className="text-xl font-semibold text-stone-950">
                    {block.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-8 text-stone-600 md:text-base">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#f7f2ec] py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="space-y-8">
            <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
              {t("Production Timeline")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
              {t("A clean operational sequence from development to shipment.")}
            </h2>
          </div>
            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 md:p-8">
              <div className="grid gap-5">
                {post.productionTimeline.map((step, index) => (
                  <div
                    key={step.phase}
                    className="grid gap-3 border-b border-stone-200 pb-5 last:border-b-0 last:pb-0 md:grid-cols-[88px_1fr]"
                  >
                    <span className="text-xs uppercase tracking-[0.28em] text-stone-400">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-950">
                        {step.phase}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-stone-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
              {t("Factory Process Gallery")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
              {t("Large visual sections that make production feel more tangible.")}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {post.gallery.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white"
              >
                {item.imageUrl ? (
                  <img
                    className="h-72 w-full object-cover"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                ) : (
                  <div className={`h-72 bg-gradient-to-br ${item.accent}`} />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-stone-950 py-20 text-white md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-white/55">
              {t("Shipment Section")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
              {post.shipment.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              {post.shipment.description}
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 md:p-8">
            <div className="grid gap-4">
              {post.shipment.checklist.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4 text-sm leading-7 text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-[0_26px_90px_rgba(18,16,12,0.08)] md:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
            {t("Next Story")}
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            {t(
              "Continue exploring how this factory turns process into a visual trust signal."
            )}
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/about-us" className="button-secondary">
              {t("Back to Journal Feed")}
            </Link>
            <Link href="/contact#inquiry" className="button-primary">
              {t("Request Factory Details")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
