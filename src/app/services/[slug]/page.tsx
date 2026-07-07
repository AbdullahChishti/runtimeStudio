import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/content/services";
import { getCaseStudyBySlug } from "@/content/caseStudies";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
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

  if (!service) notFound();

  const relatedStudies = service.relatedCaseStudySlugs
    .map((studySlug) => getCaseStudyBySlug(studySlug))
    .filter(Boolean);

  return (
    <>
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
        <Container>
          <FadeIn>
            <Link
              href="/services"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              ← All services
            </Link>
            <p className="mt-8 font-mono text-xs text-muted">{service.number}</p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {service.intro}
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Capabilities
            </p>
            <ul className="mt-6 space-y-3">
              {service.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-3 text-sm text-foreground last:border-b-0"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Problems we solve
            </p>
            <ul className="mt-6 space-y-4">
              {service.problems.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section border className="bg-surface-elevated">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Our approach
            </p>
            <ol className="mt-6 space-y-4">
              {service.approach.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs text-muted-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Outcomes
            </p>
            <ul className="mt-6 space-y-3">
              {service.outcomes.map((item) => (
                <li
                  key={item}
                  className="border border-border bg-background px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {relatedStudies.length > 0 && (
        <Section border>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Related case studies
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {relatedStudies.map((study) =>
              study ? (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group border border-border p-6 transition-colors hover:border-border-strong lg:p-8"
                >
                  <span className="text-2xl font-medium tracking-tight text-foreground">
                    {study.metric}
                  </span>
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    {study.metricLabel}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-foreground group-hover:text-accent">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{study.summary}</p>
                </Link>
              ) : null,
            )}
          </div>
        </Section>
      )}

      <Section className="bg-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-medium tracking-tight text-background sm:text-3xl">
            Ready to discuss {service.title.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-light">
            Tell us about your project and we&apos;ll respond within one business day.
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              className="border-background/20 bg-background text-foreground hover:bg-background/90"
            >
              Start a project
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
