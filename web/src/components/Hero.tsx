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
          <div className="absolute -top-6 right-6 h-36 w-36 animate-float-slow rounded-full bg-zen-saffron/20 blur-3xl" />
          <div className="absolute -bottom-10 left-4 h-40 w-40 animate-float-slow rounded-full bg-zen-emerald/20 blur-3xl" />

          {/* Mock dashboard card */}
          <div className="card relative border border-ink/10 bg-white/90 shadow-deep">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                  Portfolio rhythm
                </p>
                <p className="mt-2 text-3xl font-semibold text-ink">₹6,42,580</p>
                <p className="mt-1 text-sm text-zen-emerald">+9.4% monthly</p>
              </div>
              <div className="rounded-full border border-ink/10 bg-ivory px-3 py-1 text-xs font-semibold text-ink/70">
                Balanced
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { label: "Equities", value: "₹3,10,200", change: "+6.1%" },
                { label: "Bonds", value: "₹1,92,380", change: "+2.5%" },
                { label: "Themes", value: "₹1,40,000", change: "+4.0%" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-ink/10 bg-ivory/80 px-4 py-3"
                >
                  <p className="text-sm font-medium text-ink">{item.label}</p>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-ink">{item.value}</p>
                    <p className="text-xs text-zen-emerald">{item.change}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-ink/10 bg-white/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                Next step
              </p>
              <p className="mt-2 text-sm font-medium text-ink">
                Complete your KYC journey in 3 guided steps.
              </p>
              <button className="mt-4 w-full rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory">
                Continue onboarding
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
