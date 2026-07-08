"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { CaseStudy } from "@/content/caseStudies";
import { getServiceBySlug, accentClasses } from "@/content/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getCaseStudyAccent } from "@/components/work/caseStudyAccents";
import { withBasePath, cn } from "@/lib/utils";
import {
  motionDurations,
  motionEasing,
  viewportDefaults,
} from "@/components/animations/motion";

type ImmersiveCaseStudyProps = {
  study: CaseStudy;
};

const chapters = [
  { id: "challenge", label: "Challenge" },
  { id: "context", label: "Context" },
  { id: "approach", label: "Approach" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "stack", label: "Stack" },
  { id: "testimonial", label: "Testimonial" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.default,
      ease: motionEasing,
    },
  },
};

export function ImmersiveCaseStudy({ study }: ImmersiveCaseStudyProps) {
  const accent = getCaseStudyAccent(study.slug);
  const accentTheme = accentClasses[accent];

  return (
    <main className="min-h-screen">
      <section className="border-b border-border pt-24 pb-10 lg:pt-32 lg:pb-14">
        <Container>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="label-mono text-muted-light">Case Study</span>
            <Badge variant={accent}>{study.industry}</Badge>
          </div>

          <h1 className="heading-display max-w-3xl text-balance">
            {study.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {study.summary}
          </p>
        </Container>
      </section>

      {/* Body with sticky chapter navigation */}
      <Section border field="dots" className="case-study-body">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky chapter nav */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-28 space-y-1">
              <p className="label-mono mb-4 text-muted-light">Chapters</p>
              {chapters.map((chapter) => (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  className={cn(
                    "group flex items-center justify-between py-2 text-sm transition-colors",
                    "text-muted hover:text-foreground"
                  )}
                >
                  <span className="gradient-underline">{chapter.label}</span>
                  <ArrowRightIcon
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      "text-muted opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100"
                    )}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </aside>

          {/* Main story */}
          <article className="lg:col-span-9">
            {/* Challenge */}
            <motion.section
              id="challenge"
              className="border-t border-border py-12 lg:py-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefaults}
              variants={sectionVariants}
            >
              <SectionHeader
                label="01"
                title="Challenge"
                className="mb-8"
              />
              <p className="max-w-3xl text-lg leading-relaxed text-muted">
                {study.challenge}
              </p>
            </motion.section>

            {/* Context */}
            <motion.section
              id="context"
              className="border-t border-border py-12 lg:py-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefaults}
              variants={sectionVariants}
            >
              <SectionHeader
                label="02"
                title="Context"
                className="mb-8"
              />
              <div className="grid gap-8 lg:grid-cols-2">
                <p className="text-lg leading-relaxed text-muted">
                  {study.context}
                </p>
                <div className="space-y-4">
                  <div className="border-t border-border pt-4">
                    <p className="label-mono text-muted-light">Client</p>
                    <p className="mt-1 text-foreground">{study.client}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="label-mono text-muted-light">Industry</p>
                    <p className="mt-1 text-foreground">{study.industry}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="label-mono text-muted-light">Primary metric</p>
                    <p className="mt-1 text-foreground">
                      {study.metric} {study.metricLabel}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Approach */}
            <motion.section
              id="approach"
              className="border-t border-border py-12 lg:py-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefaults}
              variants={sectionVariants}
            >
              <SectionHeader
                label="03"
                title="Approach"
                className="mb-8"
              />
              <ol className="max-w-3xl space-y-6">
                {study.approach.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <span
                      className={cn(
                        "label-mono mt-0.5 shrink-0",
                        accentTheme.text
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg leading-relaxed text-muted">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.section>

            {/* Solution */}
            <motion.section
              id="solution"
              className="border-t border-border py-12 lg:py-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefaults}
              variants={sectionVariants}
            >
              <SectionHeader
                label="04"
                title="Solution"
                className="mb-8"
              />
              <p className="max-w-3xl text-lg leading-relaxed text-muted">
                {study.solution}
              </p>
            </motion.section>

            {/* Results preview */}
            <motion.section
              id="results"
              className="border-t border-border py-12 lg:py-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefaults}
              variants={sectionVariants}
            >
              <SectionHeader
                label="05"
                title="Results"
                className="mb-8"
              />
              <ul className="max-w-3xl space-y-4">
                {study.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg leading-relaxed text-muted"
                  >
                    <span
                      className={cn(
                        "mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full",
                        accentTheme.dot
                      )}
                      aria-hidden="true"
                    />
                    {result}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Stack & related services */}
            <motion.section
              id="stack"
              className="border-t border-border py-12 lg:py-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefaults}
              variants={sectionVariants}
            >
              <SectionHeader
                label="06"
                title="Stack & related services"
                className="mb-8"
              />

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="label-mono mb-4 text-muted-light">
                    Technologies
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge variant="neutral">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                {study.relatedServiceSlugs.length > 0 && (
                  <div>
                    <p className="label-mono mb-4 text-muted-light">
                      Related services
                    </p>
                    <ul className="space-y-3">
                      {study.relatedServiceSlugs.map((serviceSlug) => {
                        const service = getServiceBySlug(serviceSlug);
                        return (
                          <li key={serviceSlug}>
                            <Link
                              href={`/services/${serviceSlug}`}
                              className="group flex items-center justify-between text-foreground transition-colors hover:text-accent-strong"
                            >
                              <span>
                                {service?.title ??
                                  serviceSlug.replace(/-/g, " ")}
                              </span>
                              <ArrowRightIcon
                                className="h-4 w-4 text-muted-light transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </motion.section>

            {/* Testimonial */}
            {study.testimonial && (
              <motion.section
                id="testimonial"
                className="border-t border-border py-12 lg:py-16"
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefaults}
                variants={sectionVariants}
              >
                <blockquote className="pull-quote max-w-3xl">
                  <p>&ldquo;{study.testimonial.quote}&rdquo;</p>
                </blockquote>
                <div className="mt-6 max-w-3xl pl-6">
                  <p className="font-medium text-foreground">
                    {study.testimonial.author}
                  </p>
                  <p className="text-sm text-muted">
                    {study.testimonial.role}
                  </p>
                </div>
              </motion.section>
            )}
          </article>
        </div>
      </Section>

      {/* Result banner */}
      <section className="relative isolate overflow-hidden bg-accent-strong py-16 lg:py-24">
        <div className="grid-pattern absolute inset-0 opacity-10" aria-hidden="true" />
        <Container>
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="label-mono text-primary-foreground/70">
                Primary outcome
              </p>
              <p className="mt-2 data-readout text-5xl font-medium text-primary-foreground lg:text-6xl">
                {study.metric}
              </p>
              <p className="mt-1 text-lg text-primary-foreground/90">
                {study.metricLabel}
              </p>
            </div>
            <Button
              href={withBasePath("/contact")}
              variant="inverted"
              size="lg"
            >
              Discuss a similar project
            </Button>
          </div>
        </Container>
      </section>

      {/* Call to action */}
      <section className="relative isolate overflow-hidden border-t border-border py-20 lg:py-28">
        <div className="field-lattice absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section text-balance">
              Have a similar challenge?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Let&apos;s talk about how Runtime Studio can help your team ship
              with confidence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={withBasePath("/contact")} variant="accent" size="lg">
                Start a project
              </Button>
              <Button
                href={withBasePath("/work")}
                variant="secondary"
                size="lg"
              >
                All case studies
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
