import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

export default function BackofficeClientPage() {
  return (
    <main>
      <PageHeader
        title="Backoffice Client Login"
        subtitle="Placeholder sign-in for backoffice client users."
        ctaLabel="Return to Login"
        ctaHref="/login"
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">Backoffice Client login form goes here.</p>
        </div>
      </SectionShell>
    </main>
  );
}
