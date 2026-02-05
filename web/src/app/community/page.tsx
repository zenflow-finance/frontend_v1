import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Community page placeholder.
export default function CommunityPage() {
  return (
    <main>
      <PageHeader
        title="Community"
        subtitle="Investors, mentors, and events come together here." 
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">
            Placeholder for community highlights and events.
          </p>
        </div>
      </SectionShell>
    </main>
  );
}
