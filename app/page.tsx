import HeroSection from "@/components/hero";
import ProductsSection from "@/components/ProductsSection";
import RecipesSection from "@/components/RecipesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <ProductsSection />
      <RecipesSection />
      <AboutSection />
      <CTASection />
    </main>
  );
}
