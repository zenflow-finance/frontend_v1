import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

export default function RocketWebNewPage() {
  return (
    <main>
      <PageHeader
        title="Rocket Web (New)"
        subtitle="Placeholder sign-in for the new Rocket web terminal."
        ctaLabel="Return to Login"
        ctaHref="/login"
      />
      <SectionShell>
        <div className="card border-ink/10">
          <p className="text-sm text-ink/70">Rocket Web (New) login form goes here.</p>
        </div>
      </SectionShell>
    </main>
  );
}
