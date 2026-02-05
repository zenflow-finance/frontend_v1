"use client";

import { useEffect, useState } from "react";

// Homepage promo modal shown on initial load.
// We keep it lightweight and easy to swap with real creative assets.
export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-deep">
        <button
          type="button"
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/40 px-3 py-1 text-sm text-white"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <div className="bg-zen-saffron/90 px-6 py-8 text-center text-white">
          <div className="mx-auto w-full max-w-xs rounded-[28px] bg-white/95 p-6 text-ink">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
              Open a
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Demat Account</h3>
            <div className="mt-4 rounded-2xl bg-zen-saffron/20 px-4 py-3">
              <p className="text-xs uppercase text-ink/60">Under just</p>
              <p className="text-3xl font-semibold text-zen-saffron">2 mins</p>
            </div>
            <p className="mt-3 text-xs text-ink/60">
              Swift, secure & seamless
            </p>
          </div>
        </div>

        <div className="space-y-3 px-6 py-6">
          <input
            type="tel"
            placeholder="Mobile No."
            className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm"
          />
          <button className="w-full rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white">
            Submit
          </button>
          <p className="text-[11px] text-ink/50">
            By clicking submit, you agree to our Terms & Conditions and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
