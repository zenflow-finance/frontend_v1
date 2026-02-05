import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

export default function BackofficeBranchPage() {
  return (
    <main>
      <PageHeader
        title="Backoffice Branch Login"
        subtitle="Placeholder sign-in for backoffice branch users."
        ctaLabel="Return to Login"
        ctaHref="/login"
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">Backoffice Branch login form goes here.</p>
        </div>
      </SectionShell>
    </main>
  );
}
