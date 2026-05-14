import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  manufacturingJournalPosts,
  type JournalPost,
} from "@/lib/manufacturing-journal";

const JOURNAL_DATA_FILE = path.join(
  process.cwd(),
  "data",
  "journal-posts.json"
);
const JOURNAL_UPLOADS_DIR = path.join(
  process.cwd(),
  "public",
  "uploads",
  "journal"
);

function sanitizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sanitizeFilename(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizePosts(posts: JournalPost[]) {
  return posts.map((post) => ({
    ...post,
    tags: Array.isArray(post.tags) ? post.tags : [],
    storyBlocks: Array.isArray(post.storyBlocks) ? post.storyBlocks : [],
    productionTimeline: Array.isArray(post.productionTimeline)
      ? post.productionTimeline
      : [],
    gallery: Array.isArray(post.gallery) ? post.gallery : [],
    metrics: Array.isArray(post.metrics) ? post.metrics : [],
    shipment: post.shipment ?? {
      title: "Shipment Notes",
      description: "",
      checklist: [],
    },
  }));
}

export function createPostSlug(title: string) {
  const slug = sanitizeSlug(title);
  return slug || `journal-${Date.now()}`;
}

export async function getStoredJournalPosts() {
  try {
    const raw = await readFile(JOURNAL_DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as JournalPost[];
    return normalizePosts(parsed);
  } catch {
    return normalizePosts(manufacturingJournalPosts);
  }
}

export async function saveStoredJournalPosts(posts: JournalPost[]) {
  await mkdir(path.dirname(JOURNAL_DATA_FILE), { recursive: true });
  await writeFile(
    JOURNAL_DATA_FILE,
    `${JSON.stringify(normalizePosts(posts), null, 2)}\n`,
    "utf8"
  );
}

export async function saveJournalAsset(
  file: File,
  postSlug: string,
  folder: "cover" | "gallery" | "video"
) {
  const extension =
    path.extname(file.name).toLowerCase() ||
    (file.type.includes("video") ? ".mp4" : ".jpg");
  const baseName = sanitizeFilename(path.basename(file.name, extension)) || folder;
  const fileName = `${Date.now()}-${baseName}${extension}`;
  const targetDir = path.join(JOURNAL_UPLOADS_DIR, sanitizeSlug(postSlug), folder);
  const targetPath = path.join(targetDir, fileName);

  await mkdir(targetDir, { recursive: true });
  await writeFile(targetPath, Buffer.from(await file.arrayBuffer()));

  return `/uploads/journal/${sanitizeSlug(postSlug)}/${folder}/${fileName}`;
}
