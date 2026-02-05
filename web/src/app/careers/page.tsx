import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Careers page placeholder.
export default function CareersPage() {
  return (
    <main>
      <PageHeader
        title="Careers"
        subtitle="Join Zenflow and build the future of investing." 
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">
            Placeholder for open roles and culture highlights.
          </p>
        </div>
      </SectionShell>
    </main>
  );
}
