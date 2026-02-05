import { disclosures } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Disclosures page with regulatory placeholder language.
export default function DisclosuresPage() {
  return (
    <main>
      <PageHeader
        title="Disclosures"
        subtitle="Regulatory and risk disclosures for Zenflow. Replace with final legal copy." 
      />
      <SectionShell>
        <div className="card border-ink/10">
          <h3 className="text-lg font-semibold text-ink">Risk & Compliance</h3>
          <div className="mt-4 space-y-3 text-sm text-ink/70">
            {disclosures.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
