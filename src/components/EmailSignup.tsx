"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [sent, setSent] = useState(false);

  return (
    <section className="border-b border-ink/10 bg-surface">
      <div className="container-xl py-24 text-center">
        <div className="reveal max-w-lg mx-auto">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-coral mb-4">
            Where We Go Next
          </p>
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl leading-[0.95]">
            Need some ideas?
          </h2>
          <p className="mt-4 text-ink-soft text-[15px]">
            Trips we like, places worth going and vacation ideas that
            won&rsquo;t make your inbox unbearable.
          </p>

          {sent ? (
            <p className="mt-8 font-display font-semibold text-xl text-coral">
              You&rsquo;re on the list.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label className="sr-only" htmlFor="es-name">First name</label>
              <input
                id="es-name"
                required
                placeholder="First name"
                className="flex-1 rounded-full border border-ink/15 bg-paper px-5 py-3 text-[14.5px]"
              />
              <label className="sr-only" htmlFor="es-email">Email</label>
              <input
                id="es-email"
                type="email"
                required
                placeholder="Email"
                className="flex-1 rounded-full border border-ink/15 bg-paper px-5 py-3 text-[14.5px]"
              />
              <button type="submit" className="btn-go justify-center">
                Show Me
              </button>
            </form>
          )}
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft/70">
            No daily nonsense.
          </p>
        </div>
      </div>
    </section>
  );
}
