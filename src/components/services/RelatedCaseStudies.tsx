"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CaseStudy, getCaseStudyBySlug } from "@/content/caseStudies";
import { Container } from "@/components/ui/Container";
import { ServiceAccent, accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { motionEasing, motionDurations } from "@/components/animations/motion";

type RelatedCaseStudiesProps = {
  slugs: string[];
  accent: ServiceAccent;
};

export function RelatedCaseStudies({ slugs, accent }: RelatedCaseStudiesProps) {
  const reducedMotion = useReducedMotion();
  const styles = accentClasses[accent];

  const studies = slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((study): study is CaseStudy => !!study);

  if (studies.length === 0) return null;

  return (
    <section className="border-t border-border bg-surface-elevated py-24 lg:py-32">
      <Container>
        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: motionDurations.slow,
            ease: motionEasing,
          }}
        >
          <div className="mb-16 lg:mb-20">
            <h2 className="label-mono mb-4 inline-flex items-center gap-2 text-muted">
              <span
                className={cn("h-1.5 w-1.5 rounded-full", styles.dot)}
                aria-hidden="true"
              />
              Related Work
            </h2>
            <h3 className="text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              See how we apply this expertise in practice.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block bg-surface p-8 transition-colors duration-300 hover:bg-surface-elevated lg:p-10"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="label-mono text-muted">{study.client}</span>
                  <span
                    className={cn(
                      "label-mono text-2xl font-medium tracking-tight",
                      styles.text,
                    )}
                  >
                    {study.metric}
                  </span>
                </div>

                <h4 className="mb-4 text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-indigo">
                  {study.title}
                </h4>

                <p className="description-standard mb-8 line-clamp-2">
                  {study.summary}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm font-medium tracking-tight text-foreground">
                  <span>View case study</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
