"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CaseStudyVisual } from "@/components/work/CaseStudyVisual";
import { caseStudies } from "@/content/caseStudies";
import { getCaseStudyAccent } from "@/components/work/caseStudyAccents";
import { cn } from "@/lib/utils";
import {
  motionDurations,
  motionEasing,
  viewportDefaults,
} from "@/components/animations/motion";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.slow,
      ease: motionEasing,
    },
  },
};

export function PortfolioList() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="space-y-0">
          {caseStudies.map((study, index) => {
            const accent = getCaseStudyAccent(study.slug);
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={study.slug}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefaults}
                variants={itemVariants}
              >
                <Link
                  href={`/work/${study.slug}`}
                  className="group block"
                >
                  <div
                    className={cn(
                      "grid gap-8 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24",
                      "border-t border-border",
                      index === caseStudies.length - 1 && "border-b"
                    )}
                  >
                    <div
                      className={cn(
                        "lg:col-span-5",
                        isEven ? "lg:order-1" : "lg:order-2"
                      )}
                    >
                      <CaseStudyVisual
                        slug={study.slug}
                        accent={accent}
                        className="aspect-[4/3] w-full bg-surface-elevated"
                      />
                    </div>

                    <div
                      className={cn(
                        "flex flex-col justify-center lg:col-span-7",
                        isEven ? "lg:order-2" : "lg:order-1"
                      )}
                    >
                      <div className="mb-5 flex items-center gap-3">
                        <span className="label-mono text-muted-light">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <Badge variant="outline">{study.industry}</Badge>
                      </div>

                      <h2 className="heading-section text-balance transition-colors duration-200 group-hover:text-accent">
                        {study.title}
                      </h2>

                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                        {study.summary}
                      </p>

                      <div className="mt-8 flex flex-wrap items-baseline gap-4">
                        <span className="data-readout text-4xl font-medium tracking-tight text-foreground">
                          {study.metric}
                        </span>
                        <span className="label-mono text-muted-light">
                          {study.metricLabel}
                        </span>
                      </div>

                      <p className="mt-8 inline-flex items-center gap-2 label-mono text-accent-strong transition-colors duration-200 group-hover:text-accent">
                        Read case study
                        <ArrowRightIcon
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
