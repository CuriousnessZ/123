"use client";

import { useMemo, useState } from "react";
import {
  ImagePlus,
  Lock,
  Pin,
  Save,
  Send,
  ShieldCheck,
  Sparkles,
  Trash2,
  Video,
} from "lucide-react";

import type { JournalPost, JournalStatus } from "@/lib/manufacturing-journal";

type ManufacturingJournalAdminProps = {
  posts: JournalPost[];
  isSupabaseConfigured: boolean;
  adminEmails: string[];
};

const toolbarButtons = [
  { label: "H2", token: "## " },
  { label: "Bold", token: "**bold**" },
  { label: "Quote", token: "> " },
  { label: "List", token: "- " },
];

function EditorToolbar({
  onInsert,
}: {
  onInsert: (token: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-4">
      {toolbarButtons.map((button) => (
        <button
          key={button.label}
          type="button"
          onClick={() => onInsert(button.token)}
          className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-stone-900 hover:text-stone-950"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export function ManufacturingJournalAdmin({
  posts,
  isSupabaseConfigured,
  adminEmails,
}: ManufacturingJournalAdminProps) {
  const [selectedSlug, setSelectedSlug] = useState(posts[0]?.slug ?? "");
  const selectedPost = useMemo(
    () => posts.find((post) => post.slug === selectedSlug) ?? posts[0],
    [posts, selectedSlug]
  );

  const [title, setTitle] = useState(selectedPost?.title ?? "");
  const [excerpt, setExcerpt] = useState(selectedPost?.excerpt ?? "");
  const [status, setStatus] = useState<JournalStatus>(
    selectedPost?.status ?? "draft"
  );
  const [body, setBody] = useState(
    selectedPost?.storyBlocks.map((block) => `${block.heading}\n${block.body}`).join("\n\n") ??
      ""
  );
  const [tags, setTags] = useState(selectedPost?.tags.join(", ") ?? "");

  const insertToken = (token: string) => {
    setBody((current) => `${current}${current ? "\n" : ""}${token}`);
  };

  const refreshEditor = (post: JournalPost) => {
    setSelectedSlug(post.slug);
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setStatus(post.status);
    setTags(post.tags.join(", "));
    setBody(
      post.storyBlocks.map((block) => `${block.heading}\n${block.body}`).join("\n\n")
    );
  };

  return (
    <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-6">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_22px_80px_rgba(18,16,12,0.05)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-950">
                Admin-only publishing scaffold
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                This dashboard is designed for Supabase Auth + Row Level Security.
                Approved admins can create, edit, pin, draft, publish, and delete
                posts once environment variables and policies are connected.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-stone-200 bg-[#f7f2ec] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                Supabase
              </p>
              <p className="mt-2 text-sm font-semibold text-stone-950">
                {isSupabaseConfigured ? "Configured" : "Pending setup"}
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-stone-200 bg-[#f7f2ec] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                Admin allowlist
              </p>
              <p className="mt-2 text-sm font-semibold text-stone-950">
                {adminEmails.length > 0
                  ? `${adminEmails.length} account(s)`
                  : "Add NEXT_PUBLIC_JOURNAL_ADMIN_EMAILS"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white">
          <div className="flex items-center gap-3">
            <Lock className="h-4 w-4" />
            <p className="text-sm font-semibold">Publishing controls</p>
          </div>
          <div className="mt-5 space-y-3 text-sm leading-7 text-white/70">
            <p>- Draft / published status is prepared in the data model.</p>
            <p>- Pinned story priority is prepared for homepage emphasis.</p>
            <p>- Rich text body, gallery, shipment notes, and metrics are all modeled for Supabase tables.</p>
            <p>- Media upload slots are designed for Supabase Storage buckets.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
            Existing stories
          </p>
          <div className="mt-5 grid gap-3">
            {posts.map((post) => (
              <button
                key={post.slug}
                type="button"
                onClick={() => refreshEditor(post)}
                className={`rounded-[1.4rem] border p-4 text-left ${
                  post.slug === selectedSlug
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-200 bg-[#f7f2ec] text-stone-900"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold">{post.title}</p>
                  {post.pinned ? <Pin className="h-4 w-4" /> : null}
                </div>
                <p
                  className={`mt-2 text-xs uppercase tracking-[0.28em] ${
                    post.slug === selectedSlug ? "text-white/60" : "text-stone-500"
                  }`}
                >
                  {post.status} · {post.tags.join(" / ")}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_22px_80px_rgba(18,16,12,0.05)] md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Editor
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-stone-950 md:text-3xl">
              Manufacturing journal post composer
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-900"
            >
              <Save className="h-4 w-4" />
              Save Draft
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800"
            >
              <Send className="h-4 w-4" />
              Publish
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-stone-600">
            <span className="font-medium text-stone-900">Project title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="input-field"
            />
          </label>
          <label className="space-y-2 text-sm text-stone-600">
            <span className="font-medium text-stone-900">Status</span>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as JournalStatus)}
              className="input-field"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-stone-600 md:col-span-2">
            <span className="font-medium text-stone-900">Tags</span>
            <input
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              placeholder="Hotel Program, QC, Shipment"
              className="input-field"
            />
          </label>
          <label className="space-y-2 text-sm text-stone-600 md:col-span-2">
            <span className="font-medium text-stone-900">Excerpt</span>
            <textarea
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              rows={3}
              className="input-field resize-none"
            />
          </label>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-[1.4rem] border border-dashed border-stone-300 bg-[#f7f2ec] px-4 py-5 text-sm font-semibold text-stone-700"
          >
            <ImagePlus className="h-4 w-4" />
            Upload cover image
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-[1.4rem] border border-dashed border-stone-300 bg-[#f7f2ec] px-4 py-5 text-sm font-semibold text-stone-700"
          >
            <ImagePlus className="h-4 w-4" />
            Upload gallery
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-[1.4rem] border border-dashed border-stone-300 bg-[#f7f2ec] px-4 py-5 text-sm font-semibold text-stone-700"
          >
            <Video className="h-4 w-4" />
            Embed video
          </button>
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-stone-200 bg-[#fcfaf7] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-stone-950">
                Rich text editor
              </p>
              <p className="mt-1 text-sm text-stone-500">
                Toolbar scaffolded for narrative manufacturing stories, long-form
                editorial writing, and structured case-study content.
              </p>
            </div>
            <Sparkles className="h-4 w-4 text-stone-400" />
          </div>
          <div className="mt-5 space-y-4">
            <EditorToolbar onInsert={insertToken} />
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              rows={16}
              className="min-h-[320px] w-full resize-y rounded-[1.3rem] border border-stone-200 bg-white px-4 py-4 text-sm leading-7 text-stone-800 outline-none focus:border-stone-900"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[1.6rem] border border-stone-200 bg-[#f7f2ec] p-5">
          <div>
            <p className="text-sm font-semibold text-stone-950">
              Delete or pin controls
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Final persistence, storage upload, and row-level admin enforcement
              activate when Supabase credentials are connected.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-900"
            >
              <Pin className="h-4 w-4" />
              Toggle Pin
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-600 hover:border-red-400"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
