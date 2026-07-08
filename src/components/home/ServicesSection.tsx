import { servicesContent } from "@/content/home";
import { services } from "@/content/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceList } from "@/components/services/ServiceList";

export function ServicesSection() {
  return (
    <Section border>
      <SectionHeader
        label="What we do"
        title={servicesContent.title}
        description={servicesContent.subtitle}
        align="center"
      />
      <ServiceList services={services} />
    </Section>
  );
}
