import PageHeader from "@/components/PageHeader";
import PricingSection from "@/components/PricingSection";

// Pricing page reuses the pricing section to stay consistent.
export default function PricingPage() {
  return (
    <main>
      <PageHeader
        title="Pricing"
        subtitle="Transparent pricing for every investing style. Final rates to be confirmed." 
      />
      <PricingSection />
    </main>
  );
}
