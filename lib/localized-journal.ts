import type { Locale } from "@/lib/i18n";
import { formatDateByLocale, translateText } from "@/lib/i18n";
import type { JournalPost } from "@/lib/manufacturing-journal";
import { getStoredJournalPosts } from "@/lib/journal-store";

function localizeJournalPost(locale: Locale, post: JournalPost): JournalPost {
  const t = (text: string) => translateText(locale, text);

  return {
    ...post,
    title: t(post.title),
    excerpt: t(post.excerpt),
    coverLabel: t(post.coverLabel),
    readTime: t(post.readTime),
    tags: post.tags.map((tag) => t(tag)),
    heroSummary: t(post.heroSummary),
    overview: t(post.overview),
    storyBlocks: post.storyBlocks.map((block) => ({
      heading: t(block.heading),
      body: t(block.body),
    })),
    productionTimeline: post.productionTimeline.map((item) => ({
      phase: t(item.phase),
      description: t(item.description),
    })),
    gallery: post.gallery.map((item) => ({
      ...item,
      title: t(item.title),
      caption: t(item.caption),
    })),
    shipment: {
      title: t(post.shipment.title),
      description: t(post.shipment.description),
      checklist: post.shipment.checklist.map((item) => t(item)),
    },
    metrics: post.metrics.map((item) => ({
      label: t(item.label),
      value: t(item.value),
      note: t(item.note),
    })),
  };
}

export async function getLocalizedJournalData(locale: Locale) {
  const storedPosts = await getStoredJournalPosts();
  const posts = storedPosts.map((post) =>
    localizeJournalPost(locale, post)
  );
  const publishedPosts = posts
    .filter((post) => post.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  const featuredPost =
    publishedPosts.find((post) => post.pinned) ?? publishedPosts[0];
  const tags = Array.from(new Set(publishedPosts.flatMap((post) => post.tags)));

  return {
    posts,
    publishedPosts,
    featuredPost,
    tags,
  };
}

export async function getLocalizedJournalPostBySlug(
  locale: Locale,
  slug: string
) {
  const storedPosts = await getStoredJournalPosts();
  const post = storedPosts.find((entry) => entry.slug === slug);
  return post ? localizeJournalPost(locale, post) : undefined;
}

export function formatJournalDate(locale: Locale, date: string) {
  return formatDateByLocale(locale, date);
}
