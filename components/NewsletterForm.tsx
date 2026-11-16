"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to your email service (Mailchimp, ConvertKit, API route)
    setDone(true);
    setEmail("");
  };

  if (done) {
    return (
      <p className="text-sm text-[var(--color-footer-text)]">
        Thank you for subscribing.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="min-w-0 flex-1 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[var(--color-accent)] focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
}