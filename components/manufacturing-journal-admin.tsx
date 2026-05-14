"use client";

import { useMemo, useState } from "react";
import {
  ImagePlus,
  KeyRound,
  Lock,
  Pin,
  Plus,
  Save,
  Send,
  ShieldCheck,
  Sparkles,
  Trash2,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

import type { JournalPost, JournalStatus } from "@/lib/manufacturing-journal";

type ManufacturingJournalAdminProps = {
  posts: JournalPost[];
  isSupabaseConfigured: boolean;
  adminEmails: string[];
  adminUsername: string;
  passwordSource: "stored" | "env";
  recoveryInfo: {
    envFilePath: string;
    storedPasswordPath: string;
  };
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
  adminUsername,
  passwordSource,
  recoveryInfo,
}: ManufacturingJournalAdminProps) {
  const router = useRouter();
  const [postList, setPostList] = useState(posts);
  const [selectedSlug, setSelectedSlug] = useState(posts[0]?.slug ?? "__new__");
  const selectedPost = useMemo(
    () => postList.find((post) => post.slug === selectedSlug),
    [postList, selectedSlug]
  );
  const isCreatingNew = !selectedPost;

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
  const [videoEmbedUrl, setVideoEmbedUrl] = useState(selectedPost?.videoUrl ?? "");
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordFeedback, setPasswordFeedback] = useState<string | null>(null);

  const insertToken = (token: string) => {
    setBody((current) => `${current}${current ? "\n" : ""}${token}`);
  };

  const refreshEditor = (post?: JournalPost) => {
    setSelectedSlug(post?.slug ?? "__new__");
    setTitle(post?.title ?? "");
    setExcerpt(post?.excerpt ?? "");
    setStatus(post?.status ?? "draft");
    setTags(post?.tags.join(", ") ?? "");
    setBody(
      post?.storyBlocks.map((block) => `${block.heading}\n${block.body}`).join("\n\n") ??
        ""
    );
    setVideoEmbedUrl(post?.videoUrl ?? "");
    setCoverImageFile(null);
    setGalleryFiles([]);
    setVideoFile(null);
    setFeedback(null);
  };

  async function submitEditorAction(action: "save" | "publish" | "toggle-pin" | "delete") {
    if ((action === "save" || action === "publish") && !title.trim()) {
      setFeedback("Project title is required before saving.");
      return;
    }

    setPendingAction(action);
    setFeedback(null);

    try {
      const formData = new FormData();
      formData.append("action", action);
      if (selectedPost?.slug) {
        formData.append("slug", selectedPost.slug);
      }
      formData.append("title", title);
      formData.append("status", status);
      formData.append("excerpt", excerpt);
      formData.append("tags", tags);
      formData.append("body", body);
      formData.append("videoEmbedUrl", videoEmbedUrl);

      if (coverImageFile) {
        formData.append("coverImage", coverImageFile);
      }

      galleryFiles.forEach((file) => {
        formData.append("galleryImages", file);
      });

      if (videoFile) {
        formData.append("videoFile", videoFile);
      }

      const response = await fetch("/api/admin/journal", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as {
        success: boolean;
        posts?: JournalPost[];
        selectedPost?: JournalPost;
        deletedSlug?: string;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to save this post right now.");
      }

      if (result.posts) {
        setPostList(result.posts);
      }

      if (action === "delete") {
        const fallbackPost =
          result.posts?.find((post) => post.slug !== result.deletedSlug) ?? undefined;
        refreshEditor(fallbackPost);
        setFeedback("Story deleted.");
      } else {
        refreshEditor(result.selectedPost);
        setFeedback(
          action === "publish"
            ? "Story published successfully."
            : action === "toggle-pin"
              ? "Pin status updated."
              : "Draft saved successfully."
        );
      }

      router.refresh();
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "The admin request failed unexpectedly."
      );
    } finally {
      setPendingAction(null);
    }
  }

  async function handleLogout() {
    setPendingAction("logout");
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function handlePasswordChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordFeedback("Please fill in all password fields.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordFeedback("New password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordFeedback("The new password and confirmation do not match.");
      return;
    }

    setPendingAction("password");
    setPasswordFeedback(null);

    try {
      const response = await fetch("/api/admin/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const result = (await response.json()) as {
        success: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to update password.");
      }

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setPasswordFeedback("Password updated. Your new password is now active.");
    } catch (error) {
      setPasswordFeedback(
        error instanceof Error
          ? error.message
          : "Password update failed unexpectedly."
      );
    } finally {
      setPendingAction(null);
    }
  }

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
                Protected admin publishing
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                This dashboard is behind a signed admin session. Public visitors
                no longer see the publishing controls, and only authenticated
                admins can save drafts, publish stories, pin featured posts, or
                upload media.
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
          <div className="mt-5 flex items-center justify-between gap-4 rounded-[1.4rem] border border-stone-200 bg-[#fcfaf7] p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                Signed session
              </p>
              <p className="mt-2 text-sm font-semibold text-stone-950">
                Logged in as {adminUsername}
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Password source:{" "}
                {passwordSource === "stored"
                  ? "custom password set in admin"
                  : "fallback from .env.local"}
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-900"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_22px_80px_rgba(18,16,12,0.05)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-white">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-950">
                Password settings
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Change the admin password here after signing in. Once updated,
                the new password is stored securely and takes effect immediately.
              </p>
            </div>
          </div>

          <form onSubmit={handlePasswordChange} className="mt-5 space-y-4">
            <label className="block space-y-2 text-sm text-stone-600">
              <span className="font-medium text-stone-900">
                Current password
              </span>
              <input
                type="password"
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                className="input-field"
                autoComplete="current-password"
              />
            </label>
            <label className="block space-y-2 text-sm text-stone-600">
              <span className="font-medium text-stone-900">New password</span>
              <input
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="input-field"
                autoComplete="new-password"
              />
            </label>
            <label className="block space-y-2 text-sm text-stone-600">
              <span className="font-medium text-stone-900">
                Confirm new password
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="input-field"
                autoComplete="new-password"
              />
            </label>

            {passwordFeedback ? (
              <div className="rounded-[1.4rem] border border-stone-200 bg-[#fcfaf7] px-4 py-3 text-sm text-stone-700">
                {passwordFeedback}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={pendingAction !== null}
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <KeyRound className="h-4 w-4" />
              {pendingAction === "password"
                ? "Updating Password..."
                : "Update Password"}
            </button>
          </form>

          <div className="mt-5 rounded-[1.5rem] border border-stone-200 bg-[#fcfaf7] p-4 text-sm leading-7 text-stone-600">
            <p className="font-semibold text-stone-950">Forgot password?</p>
            <p className="mt-2">
              Delete `data/admin-auth.json` to fall back to the password in
              `.env.local`, then restart the dev server.
            </p>
            <p className="mt-2">
              Stored password file: {recoveryInfo.storedPasswordPath}
            </p>
            <p className="mt-2">Fallback env file: {recoveryInfo.envFilePath}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white">
          <div className="flex items-center gap-3">
            <Lock className="h-4 w-4" />
            <p className="text-sm font-semibold">Publishing controls</p>
          </div>
          <div className="mt-5 space-y-3 text-sm leading-7 text-white/70">
            <p>- Draft / published status is enforced by the admin channel only.</p>
            <p>- Pinned story priority updates the public featured article.</p>
            <p>- Cover image, gallery images, and video file upload now save through the admin API.</p>
            <p>- Public pages only render published stories and never expose this editor link.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
              Existing stories
            </p>
            <button
              type="button"
              onClick={() => refreshEditor(undefined)}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-900"
            >
              <Plus className="h-4 w-4" />
              New Story
            </button>
          </div>
          <div className="mt-5 grid gap-3">
            {postList.map((post) => (
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
              {isCreatingNew
                ? "Create a new manufacturing journal story"
                : "Manufacturing journal post composer"}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => submitEditorAction("save")}
              disabled={pendingAction !== null}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-900"
            >
              <Save className="h-4 w-4" />
              {pendingAction === "save" ? "Saving..." : "Save Draft"}
            </button>
            <button
              type="button"
              onClick={() => submitEditorAction("publish")}
              disabled={pendingAction !== null}
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800"
            >
              <Send className="h-4 w-4" />
              {pendingAction === "publish" ? "Publishing..." : "Publish"}
            </button>
          </div>
        </div>

        {feedback ? (
          <div className="mt-6 rounded-[1.4rem] border border-stone-200 bg-[#fcfaf7] px-4 py-3 text-sm text-stone-700">
            {feedback}
          </div>
        ) : null}

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
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-[1.4rem] border border-dashed border-stone-300 bg-[#f7f2ec] px-4 py-5 text-sm font-semibold text-stone-700">
            <ImagePlus className="h-4 w-4" />
            {coverImageFile ? coverImageFile.name : "Upload cover image"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) =>
                setCoverImageFile(event.target.files?.[0] ?? null)
              }
            />
          </label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-[1.4rem] border border-dashed border-stone-300 bg-[#f7f2ec] px-4 py-5 text-sm font-semibold text-stone-700">
            <ImagePlus className="h-4 w-4" />
            {galleryFiles.length > 0
              ? `${galleryFiles.length} gallery file(s)`
              : "Upload gallery"}
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(event) =>
                setGalleryFiles(Array.from(event.target.files ?? []))
              }
            />
          </label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-[1.4rem] border border-dashed border-stone-300 bg-[#f7f2ec] px-4 py-5 text-sm font-semibold text-stone-700">
            <Video className="h-4 w-4" />
            {videoFile ? videoFile.name : "Upload video"}
            <input
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(event) => setVideoFile(event.target.files?.[0] ?? null)}
            />
          </label>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-stone-600 md:col-span-2">
            <span className="font-medium text-stone-900">Video URL</span>
            <input
              value={videoEmbedUrl}
              onChange={(event) => setVideoEmbedUrl(event.target.value)}
              placeholder="https://..."
              className="input-field"
            />
          </label>
          <div className="rounded-[1.4rem] border border-stone-200 bg-[#fcfaf7] p-4 text-sm leading-7 text-stone-600">
            Current cover:{" "}
            {selectedPost?.coverImageUrl ? (
              <a
                href={selectedPost.coverImageUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-stone-900"
              >
                View uploaded file
              </a>
            ) : (
              "No uploaded cover yet."
            )}
          </div>
          <div className="rounded-[1.4rem] border border-stone-200 bg-[#fcfaf7] p-4 text-sm leading-7 text-stone-600">
            Current video:{" "}
            {selectedPost?.videoUrl ? (
              <a
                href={selectedPost.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-stone-900"
              >
                Open current video
              </a>
            ) : (
              "No video attached yet."
            )}
          </div>
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
              onClick={() => submitEditorAction("toggle-pin")}
              disabled={pendingAction !== null || isCreatingNew}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-900"
            >
              <Pin className="h-4 w-4" />
              {selectedPost?.pinned ? "Unpin Story" : "Toggle Pin"}
            </button>
            <button
              type="button"
              onClick={() => submitEditorAction("delete")}
              disabled={pendingAction !== null || isCreatingNew}
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
