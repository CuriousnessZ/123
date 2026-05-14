import { NextResponse } from "next/server";

import { verifyAdminSession } from "@/lib/admin-session";
import type {
  JournalGalleryItem,
  JournalPost,
  JournalStatus,
  JournalStoryBlock,
} from "@/lib/manufacturing-journal";
import {
  createPostSlug,
  getStoredJournalPosts,
  saveJournalAsset,
  saveStoredJournalPosts,
} from "@/lib/journal-store";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function parseTags(raw: string) {
  return raw
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function parseBodyToStoryBlocks(body: string): JournalStoryBlock[] {
  const sections = body
    .split(/\n\s*\n/g)
    .map((section) => section.trim())
    .filter(Boolean);

  return sections.map((section, index) => {
    const [firstLine = "", ...restLines] = section.split("\n");
    const heading = firstLine.trim() || `Story Block ${index + 1}`;
    const bodyText = restLines.join("\n").trim() || firstLine.trim();

    return {
      heading,
      body: bodyText,
    };
  });
}

function createDefaultPost(slug: string, title: string): JournalPost {
  const publishedAt = new Date().toISOString().slice(0, 10);

  return {
    slug,
    title,
    excerpt: "",
    coverLabel: "Draft Story",
    publishedAt,
    readTime: "5 min read",
    tags: [],
    pinned: false,
    status: "draft",
    coverAccent: "from-[#1b1b1b] via-[#6d6d6d] to-[#e7e1d8]",
    heroSummary: "",
    overview: "",
    storyBlocks: [],
    productionTimeline: [],
    gallery: [],
    shipment: {
      title: "Shipment Notes",
      description: "",
      checklist: [],
    },
    metrics: [],
  };
}

function ensureAdmin(request: Request) {
  const token = request.headers
    .get("cookie")
    ?.split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith("journal-admin-session="))
    ?.split("=")[1];

  return verifyAdminSession(token);
}

export async function GET(request: Request) {
  if (!ensureAdmin(request)) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const posts = await getStoredJournalPosts();

  return NextResponse.json({
    success: true,
    posts,
  });
}

export async function POST(request: Request) {
  if (!ensureAdmin(request)) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const formData = await request.formData();
  const action = getString(formData, "action");
  const requestedSlug = getString(formData, "slug");
  const title = getString(formData, "title");
  const statusValue = getString(formData, "status");
  const excerpt = getString(formData, "excerpt");
  const tags = parseTags(getString(formData, "tags"));
  const body = getString(formData, "body");
  const videoEmbedUrl = getString(formData, "videoEmbedUrl");
  const posts = await getStoredJournalPosts();

  const slug = requestedSlug || createPostSlug(title);
  const postIndex = posts.findIndex((post) => post.slug === slug);
  const existingPost =
    postIndex >= 0 ? posts[postIndex] : createDefaultPost(slug, title || "Untitled Story");

  if (action === "delete") {
    if (postIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Post not found.",
        },
        { status: 404 }
      );
    }

    const nextPosts = posts.filter((post) => post.slug !== slug);
    await saveStoredJournalPosts(nextPosts);

    return NextResponse.json({
      success: true,
      posts: nextPosts,
      deletedSlug: slug,
    });
  }

  if (action === "toggle-pin") {
    if (postIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Post not found.",
        },
        { status: 404 }
      );
    }

    const shouldPin = !existingPost.pinned;
    const nextPosts = posts.map((post) => {
      if (post.slug === slug) {
        return { ...post, pinned: shouldPin };
      }

      return shouldPin ? { ...post, pinned: false } : post;
    });

    await saveStoredJournalPosts(nextPosts);

    return NextResponse.json({
      success: true,
      posts: nextPosts,
      selectedPost: nextPosts.find((post) => post.slug === slug),
    });
  }

  if (!title) {
    return NextResponse.json(
      {
        success: false,
        message: "Title is required.",
      },
      { status: 400 }
    );
  }

  const requestedStatus =
    action === "publish"
      ? "published"
      : ((statusValue || existingPost.status || "draft") as JournalStatus);
  const nextStatus: JournalStatus =
    requestedStatus === "published" ? "published" : "draft";
  const nextPublishedAt =
    nextStatus === "published"
      ? existingPost.publishedAt || new Date().toISOString().slice(0, 10)
      : existingPost.publishedAt || new Date().toISOString().slice(0, 10);

  const coverImageFile = formData.get("coverImage");
  const galleryFiles = formData.getAll("galleryImages");
  const videoFile = formData.get("videoFile");

  let coverImageUrl = existingPost.coverImageUrl;
  let videoUrl = existingPost.videoUrl;
  let gallery: JournalGalleryItem[] = existingPost.gallery;

  if (coverImageFile instanceof File && coverImageFile.size > 0) {
    coverImageUrl = await saveJournalAsset(coverImageFile, slug, "cover");
  }

  if (videoFile instanceof File && videoFile.size > 0) {
    videoUrl = await saveJournalAsset(videoFile, slug, "video");
  } else if (videoEmbedUrl) {
    videoUrl = videoEmbedUrl;
  }

  const uploadedGalleryFiles = galleryFiles.filter(
    (file): file is File => file instanceof File && file.size > 0
  );

  if (uploadedGalleryFiles.length > 0) {
    gallery = await Promise.all(
      uploadedGalleryFiles.map(async (file, index) => {
        const imageUrl = await saveJournalAsset(file, slug, "gallery");

        return {
          title:
            file.name
              .replace(/\.[^/.]+$/, "")
              .replace(/[-_]+/g, " ")
              .trim() || `Gallery Image ${index + 1}`,
          caption: "Uploaded from the protected admin channel.",
          accent: existingPost.gallery[index]?.accent || "from-[#202224] via-[#5b6672] to-[#d3dbe3]",
          imageUrl,
        };
      })
    );
  }

  const nextPost: JournalPost = {
    ...existingPost,
    slug,
    title,
    excerpt,
    status: nextStatus,
    tags,
    storyBlocks: parseBodyToStoryBlocks(body),
    heroSummary: excerpt || existingPost.heroSummary || title,
    overview: body || existingPost.overview,
    coverLabel: nextStatus === "published" ? "Factory Journal" : "Draft Story",
    publishedAt: nextPublishedAt,
    pinned: existingPost.pinned,
    coverImageUrl,
    videoUrl,
    gallery,
  };

  const nextPosts =
    postIndex >= 0
      ? posts.map((post) => (post.slug === slug ? nextPost : post))
      : [nextPost, ...posts];

  await saveStoredJournalPosts(nextPosts);

  return NextResponse.json({
    success: true,
    posts: nextPosts,
    selectedPost: nextPost,
  });
}
