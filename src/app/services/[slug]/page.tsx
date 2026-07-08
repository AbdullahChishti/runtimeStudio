import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  accentClasses,
} from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ServiceNav } from "@/components/services/ServiceNav";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceApproach } from "@/components/services/ServiceApproach";
import { ServiceInteractive } from "@/components/services/ServiceInteractive";
import { ServiceOutcomes } from "@/components/services/ServiceOutcomes";
import { RelatedCaseStudies } from "@/components/services/RelatedCaseStudies";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const styles = accentClasses[service.accent];

  return (
    <main className="min-h-screen">
      <section className="border-b border-border pt-24 pb-10 lg:pt-32 lg:pb-14">
        <Container>
          <p className="label-mono text-muted">
            {service.number} / Services
          </p>
          <h1
            className={cn(
              "heading-display mt-4 max-w-3xl text-balance",
              styles.text,
            )}
          >
            {service.title}
          </h1>
          <p className="description-standard mt-6 max-w-2xl">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      <div className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
            <ServiceNav service={service} />

            <div className="min-w-0">
              <ServiceCapabilities id="capabilities" service={service} />
              <ServiceProblems id="problems" service={service} />
              <ServiceApproach id="approach" service={service} />
              <ServiceInteractive id="model" service={service} />
              <ServiceOutcomes id="outcomes" service={service} />
              <RelatedCaseStudies
                id="work"
                slugs={service.relatedCaseStudySlugs}
                accent={service.accent}
              />
            </div>
          </div>
        </Container>
      </div>

      <ServiceCTA service={service} />
    </main>
  );
}
