import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TrustSection } from "@/components/home/TrustSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";

export const metadata = createMetadata({});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TrustSection />
      <WhyUsSection />
      <InsightsSection />
      <CallToActionSection />
    </>
  );
}
