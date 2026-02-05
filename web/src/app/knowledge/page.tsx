import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Knowledge Center page placeholder.
export default function KnowledgePage() {
  return (
    <main>
      <PageHeader
        title="Knowledge Center"
        subtitle="Learning guides, newsletters, and press releases live here." 
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">
            Placeholder for educational content blocks.
          </p>
        </div>
      </SectionShell>
    </main>
  );
}
