import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

export default function FundTransferPage() {
  return (
    <main>
      <PageHeader
        title="Fund Transfer"
        subtitle="Placeholder sign-in for fund transfer users."
        ctaLabel="Return to Login"
        ctaHref="/login"
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">Fund Transfer login form goes here.</p>
        </div>
      </SectionShell>
    </main>
  );
}
