import { Metadata } from "next";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
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
      <section className="border-b border-border pt-24 pb-10 lg:pt-32 lg:pb-14">
        <Container>
          <p className="label-mono text-muted">Services</p>
          <h1 className="heading-display mt-4 max-w-3xl text-balance">
            Four disciplines for teams that ship with{" "}
            <span className="text-gradient-spectral">confidence.</span>
          </h1>
          <p className="description-standard mt-6 max-w-2xl">
            Quality engineering, AI systems, modern delivery, and technology
            consulting — each a focused practice, together covering the full
            product lifecycle.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <ServiceList services={services} />
        </Container>
      </section>

      <ServiceCTA />
    </main>
  );
}
