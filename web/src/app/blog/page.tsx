import PageHeader from "@/components/PageHeader";
import SectionShell from "@/components/SectionShell";

// Blog placeholder for future SEO content.
export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="Zenflow Blog"
        subtitle="Space reserved for future insights, guides, and market learning." 
      />
      <SectionShell>
        <div className="card border-ink/10">
          <h3 className="text-lg font-semibold text-ink">Coming soon</h3>
          <p className="mt-3 text-sm text-ink/70">
            We will add weekly content once the platform launches.
          </p>
        </div>
      </SectionShell>
    </main>
  );
}
