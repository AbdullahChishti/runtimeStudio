'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/content/caseStudies';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Field, FieldList } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { Panel } from '@/components/ui/Panel';
import { withBasePath } from '@/lib/utils';

type ImmersiveCaseStudyProps = {
  study: CaseStudy;
};

export function ImmersiveCaseStudy({ study }: ImmersiveCaseStudyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <main className="min-h-screen" ref={ref}>
      {/* Hero Section with Parallax Image (if available) */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        {study.image && (
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: parallaxY }}
          >
            <Image
              src={withBasePath(study.image)}
              alt={`${study.title} background`}
              fill
              priority
              className="object-cover opacity-30"
            />
          </motion.div>
        )}
        <Container className="relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 label-mono text-muted transition-colors hover:text-foreground"
          >
            <svg
              className="h-3.5 w-3.5"
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 heading-hero text-balance"
          >
            {study.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 max-w-2xl text-lg text-muted sm:text-xl"
          >
            {study.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-6"
          >
            <div>
              <p className="text-5xl font-medium tracking-tight text-accent sm:text-6xl">
                {study.metric}
              </p>
              <p className="mt-2 label-mono text-muted-light">
                {study.metricLabel}
              </p>
            </div>
            <FieldList className="max-w-xs flex-1">
              <Field label="Client">{study.client}</Field>
              <Field label="Industry">{study.industry}</Field>
            </FieldList>
          </motion.div>
        </Container>
      </section>

      {/* Main Content Sections */}
      <Section className="case-study-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-10"
          >
            <div>
              <h2 className="heading-card text-foreground">Challenge</h2>
              <p className="mt-4 description-standard">{study.challenge}</p>
            </div>

            <div>
              <h2 className="heading-card text-foreground">Context</h2>
              <p className="mt-4 description-standard">{study.context}</p>
            </div>

            <div>
              <h2 className="heading-card text-foreground">Approach</h2>
              <ul className="mt-4 space-y-4 description-standard">
                {study.approach.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="label-mono text-accent-strong">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="heading-card text-foreground">Solution</h2>
              <p className="mt-4 description-standard">{study.solution}</p>
            </div>

            <div>
              <h2 className="heading-card text-foreground">Results</h2>
              <ul className="mt-4 space-y-2 description-standard">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 space-y-6">
              <Panel padding="md">
                <h2 className="label-mono text-muted">Technologies</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge variant="neutral">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </Panel>

              {study.relatedServiceSlugs.length > 0 && (
                <Panel padding="md">
                  <h2 className="label-mono text-muted">Related services</h2>
                  <ul className="mt-5 space-y-3">
                    {study.relatedServiceSlugs.map((serviceSlug) => (
                      <li key={serviceSlug}>
                        <Link
                          href={`/services/${serviceSlug}`}
                          className="group flex items-center justify-between text-sm text-foreground transition-colors hover:text-accent-strong"
                        >
                          <span className="capitalize">{serviceSlug.replace(/-/g, " ")}</span>
                          <svg
                            className="h-4 w-4 text-muted-light transition-transform group-hover:translate-x-1"
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
                </Panel>
              )}

              {study.testimonial && (
                <Panel padding="md">
                  <h2 className="label-mono text-muted">Testimonial</h2>
                  <blockquote className="mt-4 pull-quote">
                    <p>&ldquo;{study.testimonial.quote}&rdquo;</p>
                  </blockquote>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {study.testimonial.author}
                  </p>
                  <p className="text-sm text-muted">{study.testimonial.role}</p>
                </Panel>
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <section className="relative isolate overflow-hidden bg-accent-strong py-20">
        <div className="grid-pattern absolute inset-0 opacity-10" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-xl text-center">
            <h2 className="heading-section text-white">
              Have a similar challenge?
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Let&apos;s talk about how Runtime Studio can help your team ship
              with confidence.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="inverted" size="lg">
                Start a project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
