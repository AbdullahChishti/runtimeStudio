import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/content/caseStudies";
import { getServiceBySlug } from "@/content/services";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return createMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  const relatedServices = study.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean);

  return (
    <>
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
        <Container>
          <FadeIn>
            <Link
              href="/work"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              ← All work
            </Link>
            <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-3xl">
                <Badge>{study.industry}</Badge>
                <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                  {study.title}
                </h1>
                <p className="mt-4 text-sm text-muted">{study.client}</p>
              </div>
              <div className="text-left lg:text-right">
                <span className="block text-4xl font-medium tracking-tight text-foreground">
                  {study.metric}
                </span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {study.metricLabel}
                </span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Challenge
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {study.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Context
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {study.context}
              </p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Approach
              </h2>
              <ol className="mt-4 space-y-3">
                {study.approach.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 text-sm leading-relaxed text-muted"
                  >
                    <span className="font-mono text-xs text-muted-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Solution
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {study.solution}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-8">
            <div className="border border-border p-6">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Technologies
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border p-6">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Results
              </h2>
              <ul className="mt-4 space-y-3">
                {study.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-2 h-px w-3 shrink-0 bg-foreground" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section border className="bg-surface-elevated">
        <FadeIn>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-medium leading-relaxed tracking-tight text-foreground sm:text-2xl">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="text-sm font-medium text-foreground">
                  {study.testimonial.author}
                </span>
                <span className="block text-sm text-muted">
                  {study.testimonial.role}
                </span>
              </cite>
            </footer>
          </blockquote>
        </FadeIn>
      </Section>

      {relatedServices.length > 0 && (
        <Section border>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Related services
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((service) =>
              service ? (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
                >
                  {service.title}
                </Link>
              ) : null,
            )}
          </div>
        </Section>
      )}

      <Section className="bg-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-medium tracking-tight text-background">
            Have a similar challenge?
          </h2>
          <div className="mt-6">
            <Button
              href="/contact"
              className="border-background/20 bg-background text-foreground hover:bg-background/90"
            >
              Start a conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
