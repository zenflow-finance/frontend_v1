import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Rocket app landing page (placeholder).
// This will be populated from the Stockz HTML layout in the next pass.
export default function RocketPage() {
  return (
    <main>
      <PageHeader
        title="Rocket App"
        subtitle="The next-generation trading terminal for Zenflow clients."
        ctaLabel="Open Demat Account"
        ctaHref="/open-account"
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">
            Placeholder layout. We will mirror the Stockz HTML structure here and
            replace images with named placeholders.
          </p>
        </div>
      </SectionShell>
    </main>
  );
}
