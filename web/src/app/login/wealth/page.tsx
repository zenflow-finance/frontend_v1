import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

export default function WealthPage() {
  return (
    <main>
      <PageHeader
        title="Wealth"
        subtitle="Placeholder sign-in for wealth clients."
        ctaLabel="Return to Login"
        ctaHref="/login"
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">Wealth login form goes here.</p>
        </div>
      </SectionShell>
    </main>
  );
}
