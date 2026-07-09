import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CommitmentSection } from "@/components/home/CommitmentSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";

export function NewHomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <CommitmentSection />
      <CaseStudiesSection />
      <TechStackSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
