import { HeroSection } from "@/components/home/HeroSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";

export function NewHomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PackagesSection />
      <ServicesSection />
      <CaseStudiesSection />
      <InsightsSection />
      <CallToActionSection />
    </main>
  );
}
