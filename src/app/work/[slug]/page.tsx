import { notFound } from "next/navigation";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/content/caseStudies";
import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return createMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <main className="relative pt-16 lg:pt-24">
      {/* Hero */}
      <Section>
        <Container>
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5M12 19l-7-7 7-7"
                />
              </svg>
              All work
            </Link>

            <h1 className="mt-8 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {study.title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {study.summary}
            </p>
            <p className="mt-2 text-base text-muted-foreground">Client: {study.client}</p>
            <p className="mt-2 text-base text-muted-foreground">Industry: {study.industry}</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-5xl font-medium tracking-tight text-primary sm:text-6xl">
                  {study.metric}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                  {study.metricLabel}
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="mt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  Challenge
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  Context
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {study.context}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  Approach
                </h2>
                <ul className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {study.approach.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-bold text-primary">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  Solution
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {study.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  Results
                </h2>
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 text-primary shrink-0 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-4">
              <div className="sticky top-8 space-y-8">
                <div className="border border-border p-6 rounded-lg bg-card">
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Technologies
                  </h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {study.relatedServiceSlugs.length > 0 && (
                  <div className="border border-border p-6 rounded-lg bg-card">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Related Services
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {study.relatedServiceSlugs.map((serviceSlug) => (
                        <li key={serviceSlug}>
                          <Link
                            href={`/services/${serviceSlug}`}
                            className="group flex items-center justify-between text-base text-foreground transition-colors hover:text-primary"
                          >
                            <span>{serviceSlug.replace(/-/g, ' ')}</span>
                            <svg
                              className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {study.testimonial && (
                  <div className="border border-border p-6 rounded-lg bg-card">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      Testimonial
                    </h2>
                    <blockquote className="text-muted-foreground italic">
                      <p className="mb-2">"{study.testimonial.quote}"</p>
                      <footer>
                        <cite className="not-italic font-medium text-foreground">
                          {study.testimonial.author}
                        </cite>
                        <p className="text-sm text-muted-foreground">
                          {study.testimonial.role}
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative overflow-hidden bg-primary mt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern h-full w-full" />
        </div>
        <FadeIn className="relative text-center py-16">
          <h2 className="text-2xl font-medium tracking-tight text-primary-foreground sm:text-3xl">
            Have a similar challenge?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Let&apos;s talk about how Runtime Studio can help your team ship with confidence.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium
                ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                disabled:opacity-50 h-10 px-4 py-2 bg-primary-foreground text-primary
                hover:bg-primary-foreground/90"
            >
              Start a project
            </Link>
          </div>
        </FadeIn>
      </Section>
    </main>
  );
}
