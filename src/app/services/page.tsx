import { Metadata } from "next";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ServiceOverviewHero } from "@/components/services/ServiceOverviewHero";
import { ServiceList } from "@/components/services/ServiceList";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Expertise in quality engineering, AI systems, and modern software development. We help teams build better software and smarter systems.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServiceOverviewHero />

      <section className="py-16 lg:py-24">
        <Container>
          <ServiceList services={services} />
        </Container>
      </section>

      <ServiceCTA />
    </main>
  );
}
