import { servicesContent } from "@/content/home";
import { services } from "@/content/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesSection() {
  return (
    <Section border>
      <SectionHeader
        label="What we do"
        title={servicesContent.title}
        description={servicesContent.subtitle}
        align="center"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
}
