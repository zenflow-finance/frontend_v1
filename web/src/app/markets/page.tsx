import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Markets page placeholder for future data-driven modules.
export default function MarketsPage() {
  return (
    <main>
      <PageHeader
        title="Markets"
        subtitle="Price, volume, and index insights will live here." 
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">
            Placeholder for real-time market analysis widgets.
          </p>
        </div>
      </SectionShell>
    </main>
  );
}
