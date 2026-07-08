import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import type { ServiceAccent } from "@/content/services";
import { accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";
import { ServiceSection } from "./ServiceSection";

interface RelatedCaseStudiesProps {
  slugs: string[];
  accent: ServiceAccent;
  id?: string;
}

export function RelatedCaseStudies({
  slugs,
  accent,
  id,
}: RelatedCaseStudiesProps) {
  const styles = accentClasses[accent];
  const related = caseStudies.filter((study) => slugs.includes(study.slug));

  if (related.length === 0) return null;

  return (
    <ServiceSection
      id={id}
      title="Related work"
      accent={accent}
      contained={false}
    >
      <div className="divide-y divide-border">
        {related.map((study) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="group block py-8 transition-colors duration-200 hover:bg-surface-elevated"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="label-mono text-muted-light">
                  {study.client}
                  <span className="mx-2 text-border">/</span>
                  {study.industry}
                </p>
                <h3
                  className={cn(
                    "mt-2 text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-accent",
                    styles.text,
                  )}
                >
                  {study.title}
                </h3>
                <p className="mt-3 max-w-2xl text-muted">{study.summary}</p>
              </div>
              <div className="lg:text-right">
                <p className="data-readout text-3xl font-medium text-foreground">
                  {study.metric}
                </p>
                <p className="label-mono text-muted">{study.metricLabel}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ServiceSection>
  );
}
