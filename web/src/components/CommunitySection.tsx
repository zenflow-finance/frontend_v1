import { testimonials } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";

// Social proof with calm, minimal testimonial cards.
export default function CommunitySection() {
  return (
    <SectionShell className="bg-ivory/60">
      <SectionHeading
        eyebrow="Voices"
        title="Investors who feel grounded with Zenflow"
        subtitle="Clear communication builds trust. These are placeholder testimonials." 
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="card border-ink/10">
            <p className="text-sm text-ink/70">“{item.quote}”</p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-ink">{item.name}</p>
              <p className="text-xs text-ink/60">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
