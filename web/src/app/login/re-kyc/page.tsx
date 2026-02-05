import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

export default function ReKycPage() {
  return (
    <main>
      <PageHeader
        title="Re-KYC"
        subtitle="Placeholder sign-in for Re-KYC users."
        ctaLabel="Return to Login"
        ctaHref="/login"
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">Re-KYC login form goes here.</p>
        </div>
      </SectionShell>
    </main>
  );
}
