import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";

export function NewHomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <WhyUsSection />
      <TrustSection />
      <InsightsSection />
      <CallToActionSection />
    </main>
  );
}
