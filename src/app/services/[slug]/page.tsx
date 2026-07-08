import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceApproach } from "@/components/services/ServiceApproach";
import { ServiceOutcomes } from "@/components/services/ServiceOutcomes";
import { RelatedCaseStudies } from "@/components/services/RelatedCaseStudies";
import { ServiceSection } from "@/components/services/ServiceSection";
import Image from "next/image";
import { InteractiveServiceElement } from "@/components/services/InteractiveServiceElement";
import { withBasePath } from "@/lib/utils";

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

  return (
    <main className="min-h-screen">
      {service.heroImage && (
        <section className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src={withBasePath(service.heroImage)}
            alt={`Hero image for ${service.title}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </section>
      )}
      <ServiceIntro service={service} />

      {service.interactiveElementConfig && (
        <ServiceSection title="How it works" accent={service.accent}>
          <InteractiveServiceElement
            config={service.interactiveElementConfig}
            accent={service.accent}
          />
        </ServiceSection>
      )}

      <ServiceCapabilities service={service} />
      <ServiceProblems service={service} />
      <ServiceApproach service={service} />
      <ServiceOutcomes service={service} />
      <RelatedCaseStudies slugs={service.relatedCaseStudySlugs} accent={service.accent} />
      <ServiceCTA service={service} />
    </main>
  );
}
