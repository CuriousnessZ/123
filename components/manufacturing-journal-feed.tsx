"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Locale } from "@/lib/i18n";
import { createTranslator, formatDateByLocale } from "@/lib/i18n";
import type { JournalPost } from "@/lib/manufacturing-journal";

type ManufacturingJournalFeedProps = {
  posts: JournalPost[];
  tags: string[];
  locale: Locale;
};

const INITIAL_VISIBLE = 4;
const PAGE_SIZE = 2;

export function ManufacturingJournalFeed({
  posts,
  tags,
  locale,
}: ManufacturingJournalFeedProps) {
  const t = createTranslator(locale);
  const allLabel = t("All");
  const [activeTag, setActiveTag] = useState(allLabel);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filteredPosts = useMemo(() => {
    if (activeTag === allLabel) {
      return posts;
    }

    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag, allLabel, posts]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeTag]);

  useEffect(() => {
    setActiveTag(allLabel);
  }, [allLabel]);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry?.isIntersecting) {
          setVisibleCount((current) =>
            Math.min(current + PAGE_SIZE, filteredPosts.length)
          );
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [filteredPosts.length]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredPosts.length;

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {[allLabel, ...tags].map((tag) => {
          const isActive = tag === activeTag;

          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                isActive
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 bg-white text-stone-600 hover:border-stone-900 hover:text-stone-950"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {visiblePosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.04,
            }}
            className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_24px_80px_rgba(18,16,12,0.06)]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
              <div
                className={`min-h-[260px] bg-gradient-to-br ${post.coverAccent}`}
              />
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-500">
                  <span>{post.coverLabel}</span>
                  <span>{formatDateByLocale(locale, post.publishedAt)}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
                  {post.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-200 bg-[#f7f2ec] px-3 py-1 text-xs text-stone-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-stone-600 md:text-base">
                  {post.excerpt}
                </p>
                <Link
                  href={`/about-us/${post.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-stone-900"
                >
                  {t("Read Full Story")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-[1.75rem] border border-dashed border-stone-300 bg-white p-8 text-center text-sm text-stone-500">
          {t("No stories match this tag yet.")}
        </div>
      ) : null}

      <div ref={sentinelRef} />

      {canLoadMore ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + PAGE_SIZE, filteredPosts.length)
              )
            }
            className="rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-900 hover:border-stone-900"
          >
            {t("Load More Stories")}
          </button>
        </div>
      ) : null}
    </div>
  );
}
