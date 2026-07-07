import {
  Hero,
  TrustSection,
  FinalCTA,
} from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { HowWeWork, WhyRuntimeStudio } from "@/components/home/HowWeWork";
import { InsightsPreview } from "@/components/home/InsightsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <FeaturedWork />
      <HowWeWork />
      <WhyRuntimeStudio />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
