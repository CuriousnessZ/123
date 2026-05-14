"use client";

import { LoaderCircle, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type AdminLoginFormProps = {
  nextPath: string;
  isAlreadyAuthenticated: boolean;
};

export function AdminLoginForm({
  nextPath,
  isAlreadyAuthenticated,
}: AdminLoginFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const result = (await response.json()) as {
        success: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Login failed.");
      }

      router.push(nextPath);
      router.refresh();
    } catch (error) {
      setFeedback(
        error instanceof Error ? error.message : "Unable to sign in right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      {isAlreadyAuthenticated ? (
        <div className="rounded-[1.6rem] border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-900">
          Active admin session detected. Sign in again if you want to refresh
          the session before entering the backend.
        </div>
      ) : null}

      <label className="block space-y-2 text-sm text-stone-600">
        <span className="font-medium text-stone-900">Username</span>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="input-field"
          autoComplete="username"
        />
      </label>

      <label className="block space-y-2 text-sm text-stone-600">
        <span className="font-medium text-stone-900">Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input-field"
          autoComplete="current-password"
          required
        />
      </label>

      {feedback ? (
        <div className="rounded-[1.4rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {feedback}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Signing In
          </>
        ) : (
          <>
            <LockKeyhole className="h-4 w-4" />
            Open Admin Channel
          </>
        )}
      </button>
    </form>
  );
}
