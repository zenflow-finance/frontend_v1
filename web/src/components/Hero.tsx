import Link from "next/link";

import { heroHighlights } from "@/content/site";

// Hero section sets the tone: futuristic, minimal, confident.
// Highlights the ecosystem and primary CTA.
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background: soft gradient + cultural motif */}
      <div className="absolute inset-0 -z-10 bg-zen-aurora" />
      <div className="absolute inset-0 -z-10 heritage-motif opacity-50" />

      <div className="container-base grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ivory/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-ink/70">
            Built for Indian investors
          </p>
          <h1 className="mt-6 text-4xl font-semibold text-ink md:text-5xl">
            Mutual funds, equities, and bonds in one calm ecosystem.
          </h1>
          <p className="mt-5 text-lg text-ink/70">
            Zenflow connects equities, bonds, research, and goal-based journeys so
            every investor can move with clarity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/open-account" className="button-primary">
              Open Account
            </Link>
            <Link href="/products" className="button-secondary">
              Explore Products
            </Link>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-ink/70 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-zen-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Illustration block with rupee elements (no animation). */}
          <div className="relative rounded-[36px] border border-ink/10 bg-white/80 p-8 shadow-deep">
            <div className="absolute -right-6 top-10 h-28 w-28 rounded-[28px] bg-zen-saffron/25" />
            <div className="absolute bottom-6 right-6 h-24 w-24 rounded-[28px] bg-zen-emerald/25" />
            <div className="absolute -left-8 top-6 h-12 w-12 rounded-full bg-zen-sky/20" />
            <div className="absolute -bottom-6 left-10 h-10 w-10 rounded-full bg-zen-saffron/20" />

            <div className="relative">
              <div className="h-72 w-full rounded-[32px] border border-ink/10 bg-ivory/80" />

              {/* Floating feature tiles */}
              <div className="absolute -left-4 top-10 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zen-sky/20 text-zen-sky">
                    ₹
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">IPO</p>
                    <p className="text-xs text-ink/60">Launch-ready</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-2 top-2 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zen-saffron/20 text-zen-saffron">
                    ₹
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">FPI</p>
                    <p className="text-xs text-ink/60">Global access</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zen-emerald/20 text-zen-emerald">
                    ₹
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Rocket</p>
                    <p className="text-xs text-ink/60">Trading terminal</p>
                  </div>
                </div>
              </div>

              <div className="absolute left-10 bottom-4 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zen-sky/20 text-zen-sky">
                    ₹
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Bonds</p>
                    <p className="text-xs text-ink/60">Stable yield</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-ink/60">
              Illustration placeholder. We can replace with final artwork later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
