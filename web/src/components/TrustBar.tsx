import { complianceHighlights } from "@/content/site";

// Lightweight strip to reassure about compliance and trust signals.
export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-ivory/90">
      <div className="container-base flex flex-col gap-4 py-6 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
          Compliance first
        </p>
        <div className="flex flex-wrap gap-4">
          {complianceHighlights.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-zen-emerald" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
