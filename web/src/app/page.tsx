import CTA from "@/components/CTA";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningSection from "@/components/LearningSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import ProductsGrid from "@/components/ProductsGrid";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <ProductsGrid />
      <LearningSection />
      <PricingSection />
      <CommunitySection />
      <CTA />
      <Footer />
    </main>
  );
}
