import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";

export function NewHomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
    </main>
  );
}
