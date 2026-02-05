import CTA from "@/components/CTA";
import CommunitySection from "@/components/CommunitySection";
import Hero from "@/components/Hero";
import LearningSection from "@/components/LearningSection";
import PricingSection from "@/components/PricingSection";
import ProductsGrid from "@/components/ProductsGrid";
import PromoModal from "@/components/PromoModal";
import RegulatorySection from "@/components/RegulatorySection";
import TrustBar from "@/components/TrustBar";

// Homepage layout composed of modular sections.
export default function Home() {
  return (
    <main>
      <PromoModal />
      <Hero />
      <TrustBar />
      <RegulatorySection />
      <ProductsGrid />
      <LearningSection />
      <PricingSection />
      <CommunitySection />
      <CTA />
    </main>
  );
}
