import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import SectionShell from "@/components/SectionShell";

// Products overview page.
export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        title="Products"
        subtitle="A full stack of investing tools, from equities to bonds and future-ready research." 
      />
      <SectionShell>
        <SectionHeading
          eyebrow="Highlights"
          title="Everything lives in one ecosystem"
          subtitle="Use this page to expand product detail sections once content arrives." 
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "Equity trading + intelligence",
            "Bond ladders + fixed income",
            "Thematic baskets + research"
          ].map((item) => (
            <div key={item} className="card border-ink/10">
              <h3 className="text-lg font-semibold text-ink">{item}</h3>
              <p className="mt-3 text-sm text-ink/70">
                Add product screenshots, workflows, and pricing here.
              </p>
            </div>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}
