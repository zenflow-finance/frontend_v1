import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Support page with contact placeholders.
export default function SupportPage() {
  return (
    <main>
      <PageHeader
        title="Support"
        subtitle="Reach the Zenflow team for onboarding help, compliance queries, or platform assistance." 
      />
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card border-ink/10">
            <h3 className="text-lg font-semibold text-ink">Help Center</h3>
            <p className="mt-3 text-sm text-ink/70">
              Add FAQs, articles, and support workflows here.
            </p>
          </div>
          <div className="card border-ink/10">
            <h3 className="text-lg font-semibold text-ink">Contact</h3>
            <p className="mt-3 text-sm text-ink/70">
              Provide email, phone, and live chat details once finalized.
            </p>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
