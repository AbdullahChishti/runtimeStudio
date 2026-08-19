import { HeroSection } from "@/components/home/HeroSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";

export function NewHomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CaseStudiesSection />
      <ServicesSection />
      <PackagesSection />
      <CallToActionSection />
    </main>
  );
}
