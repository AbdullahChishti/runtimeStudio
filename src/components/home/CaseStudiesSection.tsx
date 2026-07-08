"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { caseStudiesContent } from "@/content/home";
import { getFeaturedCaseStudies } from "@/content/caseStudies";
import { getCaseStudyAccent } from "@/components/work/caseStudyAccents";
import { accentClasses } from "@/content/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";
import { motionDurations, motionEasing } from "@/components/animations/motion";

export function CaseStudiesSection() {
  const featured = getFeaturedCaseStudies();
  const reduceMotion = useReducedMotion();

  return (
    <Section border accent="teal" field="dots">
      <SectionHeader
        label="Case studies"
        title={caseStudiesContent.title}
        description={caseStudiesContent.subtitle}
        align="center"
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="heading-display text-balance">
            Measured outcomes for{" "}
            <span className="text-gradient-spectral">ambitious teams</span>.
          </p>
          <p className="mt-6 max-w-md description-standard">
            Every engagement is judged by the business results it produces.
            Here is a sample of what we have delivered.
          </p>
        </div>

        <div className="flex flex-col lg:col-span-7">
          {featured.map((study, index) => {
            const accent = getCaseStudyAccent(study.slug);
            return (
              <motion.div
                key={study.slug}
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: motionDurations.default,
                  delay: index * 0.08,
                  ease: motionEasing,
                }}
              >
                <Link
                  href={`/work/${study.slug}`}
                  className="group block border-b border-border py-8 first:border-t lg:py-10"
                >
                  <div className="flex flex-wrap items-baseline gap-4">
                    <span
                      className={`text-4xl font-semibold tracking-tight ${accentClasses[accent].text}`}
                    >
                      {study.metric}
                    </span>
                    <span className="label-mono text-muted-light">
                      {study.metricLabel}
                    </span>
                  </div>
                  <h3 className="mt-4 heading-block text-foreground">
                    {study.title}
                  </h3>
                  <p className="mt-2 description-standard">{study.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-strong transition-colors group-hover:text-accent">
                    Read case study
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}

          <div className="mt-10">
            <Button href={withBasePath("/work")} variant="secondary" size="lg">
              View all work
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
