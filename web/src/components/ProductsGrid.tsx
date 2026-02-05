import { ecosystemPillars } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";

// Ecosystem overview: the "financial ecosystem" translated into pillars.
export default function ProductsGrid() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Ecosystem"
        title="One calm surface for every investing move"
        subtitle="Zenflow connects research, execution, and guidance so investors never feel lost." 
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {ecosystemPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="card border-ink/10 bg-white/90"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
              {pillar.tag}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm text-ink/70">{pillar.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
