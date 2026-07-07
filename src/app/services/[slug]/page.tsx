import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  accentClasses,
} from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceDetailSection } from "@/components/services/ServiceDetailSection";
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

  const accent = accentClasses[service.accent];

  return (
    <main className="min-h-screen">
      <ServiceDetailHero service={service} />

      <ServiceDetailSection
        title="Capabilities"
        accent={service.accent}
        id="capabilities"
      >
        <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {service.capabilities.map((capability) => (
            <li key={capability} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full",
                  accent.dot,
                )}
                aria-hidden="true"
              />
              <span className="text-lg leading-relaxed text-foreground">
                {capability}
              </span>
            </li>
          ))}
        </ul>
      </ServiceDetailSection>

      <ServiceDetailSection
        title="The Problem"
        accent={service.accent}
        className="bg-surface-elevated"
        id="problem"
      >
        <div className="max-w-2xl space-y-6">
          {service.problems.map((problem) => (
            <div key={problem} className="flex items-start gap-4">
              <span className="font-mono text-muted" aria-hidden="true">
                —
              </span>
              <p className="text-lg leading-relaxed text-muted">{problem}</p>
            </div>
          ))}
        </div>
      </ServiceDetailSection>

      <ServiceDetailSection
        title="Approach"
        accent={service.accent}
        id="approach"
      >
        <ol className="space-y-10">
          {service.approach.map((step, index) => (
            <li key={step} className="flex gap-5">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-sm text-background",
                  accent.dot,
                )}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-0.5 text-lg leading-relaxed text-foreground">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </ServiceDetailSection>

      <ServiceDetailSection
        title="Outcomes"
        accent={service.accent}
        className="bg-foreground text-background"
        id="outcomes"
      >
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {service.outcomes.map((outcome) => (
            <li key={outcome} className="border-l border-white/20 pl-5">
              <p className="text-xl font-medium tracking-tight text-background">
                {outcome}
              </p>
            </li>
          ))}
        </ul>
      </ServiceDetailSection>

      <RelatedCaseStudies
        slugs={service.relatedCaseStudySlugs}
        accent={service.accent}
      />

      <ServiceCTA service={service} />
    </main>
  );
}
