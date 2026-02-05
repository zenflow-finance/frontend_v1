import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

export default function BackOfficeLoginPage() {
  return (
    <main>
      <PageHeader
        title="Back Office Login"
        subtitle="Placeholder sign-in for back office users."
        ctaLabel="Return to Login"
        ctaHref="/login"
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">Back Office login form goes here.</p>
        </div>
      </SectionShell>
    </main>
  );
}
