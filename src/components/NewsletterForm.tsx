"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const light = tone === "light";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter an email address to preview the signup.");
      setDone(false);
      return;
    }
    setError("");
    setDone(true);
  }

  if (done) {
    return (
      <p role="status" className={light ? "text-sm text-moss" : "text-sm text-sage"}>
        Noted in this browser only. Nothing was sent — the list is a placeholder for notes on risk, travel, books, and plants.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className={`h-11 flex-1 rounded-full border px-4 text-sm outline-none ${
            light
              ? "border-ink/15 bg-foam text-ink placeholder:text-ink/40"
              : "border-cream/20 bg-ink/30 text-cream placeholder:text-cream/40"
          }`}
        />
        <button
          type="submit"
          className={`h-11 rounded-full px-5 text-sm ${light ? "bg-ink text-cream hover:bg-moss" : "bg-cream text-ink hover:bg-paper"}`}
        >
          Request notes
        </button>
      </div>
      {error && (
        <p role="alert" className="text-sm text-clay">
          {error}
        </p>
      )}
    </form>
  );
}
