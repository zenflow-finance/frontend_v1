import { regulatoryHighlights, regulatoryStats } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";

// Dedicated regulatory section to reinforce trust and compliance.
// Keeps messaging explicit without overpowering the main hero narrative.
export default function RegulatorySection() {
  return (
    <SectionShell className="bg-ivory/80">
      <SectionHeading
        eyebrow="Regulatory & Trust"
        title="Compliance-first investing, with clarity at every step"
        subtitle="This section reinforces trust signals beyond the quick compliance strip." 
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-6 md:grid-cols-3">
          {regulatoryHighlights.map((item) => (
            <div key={item.title} className="card border-ink/10 bg-white/90">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="card border-ink/10 bg-white/90">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
            Compliance snapshot
          </p>
          <div className="mt-6 space-y-4">
            {regulatoryStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-2xl border border-ink/10 bg-ivory/70 px-4 py-3"
              >
                <p className="text-sm font-medium text-ink">{stat.label}</p>
                <p className="text-sm font-semibold text-zen-emerald">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-ink/60">
            Replace with official regulatory registrations and memberships once
            finalized.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
