import { Metadata } from "next";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard"; // New component for overview
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
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
      <section className="relative border-b border-border pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-[0.03]" />
        <Container>
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <Text className="text-xl text-accent-indigo" weight="medium">
              Our Services
            </Text>
            <Heading level="h1" className="mt-4">
              Specialised expertise for{" "}
              <span className="text-accent-indigo italic">ambitious</span>{" "}
              engineering teams.
            </Heading>
            <Text className="mt-8 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">
              We partner with senior leaders to solve complex technical challenges,
              improve engineering velocity, and build systems that scale with confidence.
            </Text>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <ServiceCTA />
    </main>
  );
}
