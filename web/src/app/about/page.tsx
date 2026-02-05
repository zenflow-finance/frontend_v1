import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";

// About page with mission placeholders.
export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Zenflow"
        subtitle="We are building a calm, compliant, and culturally grounded financial ecosystem for India." 
      />
      <SectionShell>
        <SectionHeading
          eyebrow="Mission"
          title="Clarity, trust, and long-term growth"
          subtitle="Replace these sections with your origin story, team, and vision statements." 
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Why Zenflow",
              copy: "We want every investor to feel guided, not overwhelmed."
            },
            {
              title: "How we build",
              copy: "Product decisions are made with compliance, culture, and calm UI in mind."
            }
          ].map((item) => (
            <div key={item.title} className="card border-ink/10">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{item.copy}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}
