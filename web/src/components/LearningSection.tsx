import { productHighlights } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";

// Product highlights section with accent colors for quick scanning.
export default function LearningSection() {
  const accentStyles: Record<
    "saffron" | "emerald" | "sky",
    string
  > = {
    saffron: "border-zen-saffron/30 bg-zen-saffron/10",
    emerald: "border-zen-emerald/30 bg-zen-emerald/10",
    sky: "border-zen-sky/30 bg-zen-sky/10"
  };

  return (
    <SectionShell className="bg-ivory/60">
      <SectionHeading
        eyebrow="Products"
        title="Tools that respect every investing style"
        subtitle="From equities to bonds, Zenflow keeps research, execution, and learning connected." 
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {productHighlights.map((item) => (
          <div
            key={item.title}
            className={`card border ${accentStyles[item.accent]}`}
          >
            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm text-ink/70">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
