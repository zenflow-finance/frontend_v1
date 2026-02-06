import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";
import ResponsiveAssetImage from "@/components/ResponsiveAssetImage";
import { rocketAssets } from "@/content/rocketAssets";

// Rocket app landing page.
// Layout mirrors the Stockz HTML structure with modular sections.
export default function RocketPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-ink">
        <div className="container-base grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zen-saffron">
              Rocket App
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Rocket Trading App
            </h1>
            <p className="mt-4 text-sm text-white/70">
              The next generation stock trading app for Zenflow clients.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-zen-saffron px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Download App
              </button>
              <button className="rounded-2xl border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Explore Features
              </button>
            </div>
          </div>
          <ResponsiveAssetImage
            asset={rocketAssets.hero}
            className="w-full rounded-[32px] border border-white/10"
          />
        </div>
      </section>

      {/* Key features */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Key Features"
          title="Key Features of Rocket App"
          subtitle="Highlights adapted from the Stockz layout."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ResponsiveAssetImage
            asset={rocketAssets.features}
            className="w-full rounded-[28px] border border-ink/10"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Advance Option Chain",
              "Margin Trading Facility up to 4X",
              "TradingView Charts",
              "Advance Screening Tools",
              "Smart Stop-Loss",
              "Basket Orders"
            ].map((feature) => (
              <div key={feature} className="card border-ink/10">
                <p className="text-sm font-medium text-ink">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* Market section */}
      <SectionShell className="bg-ivory/60 py-14">
        <SectionHeading
          eyebrow="Market"
          title="Empower yourself with our Powerful Market section"
          subtitle="Track performance, analysis, and alerts in one view."
        />
        <div className="mt-8">
          <ResponsiveAssetImage
            asset={rocketAssets.market}
            className="w-full rounded-[28px] border border-ink/10"
          />
        </div>
      </SectionShell>

      {/* Mobile app section */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Mobile"
          title="The Ultimate Mobile App for Future & Option Trading Accessibility"
          subtitle="Speed-focused flows designed for trading on the go."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Fast order execution",
              "Single-tap watchlists",
              "Contextual alerts",
              "Strategy insights"
            ].map((item) => (
              <div key={item} className="card border-ink/10">
                <p className="text-sm text-ink/70">{item}</p>
              </div>
            ))}
          </div>
          <ResponsiveAssetImage
            asset={rocketAssets.mobileApp}
            className="w-full rounded-[28px] border border-ink/10"
          />
        </div>
      </SectionShell>

      {/* Opportunities */}
      <SectionShell className="bg-ivory/60 py-14">
        <SectionHeading
          eyebrow="Discover"
          title="Discover new trading opportunities easily"
          subtitle="Shortcuts to opportunities, scans, and curated ideas."
        />
        <div className="mt-8">
          <ResponsiveAssetImage
            asset={rocketAssets.opportunities}
            className="w-full rounded-[28px] border border-ink/10"
          />
        </div>
      </SectionShell>

      {/* Explore stocks */}
      <SectionShell className="py-14">
        <SectionHeading
          eyebrow="Explore"
          title="Explore Stocks"
          subtitle="Preview watchlists, movers, and insights here."
        />
        <div className="mt-8">
          <ResponsiveAssetImage
            asset={rocketAssets.explore}
            className="w-full rounded-[28px] border border-ink/10"
          />
        </div>
      </SectionShell>
    </main>
  );
}
