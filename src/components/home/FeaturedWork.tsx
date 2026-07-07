import Link from "next/link";
import { getFeaturedCaseStudies } from "@/content/caseStudies";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { Section, SectionHeader } from "@/components/ui/Section";

export function FeaturedWork() {
  const caseStudies = getFeaturedCaseStudies();

  return (
    <Section border>
      <SectionHeader
        label="Selected work"
        title="Results that speak in metrics."
        description="Representative engagements across quality engineering, AI systems, and platform development."
      />

      <StaggerChildren className="grid gap-8 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <StaggerItem key={study.slug}>
            <Link
              href={`/work/${study.slug}`}
              className="group flex h-full flex-col border border-border bg-surface p-6 transition-colors hover:border-border-strong lg:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {study.industry}
                </span>
                <div className="text-right">
                  <span className="block text-2xl font-medium tracking-tight text-foreground">
                    {study.metric}
                  </span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    {study.metricLabel}
                  </span>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground group-hover:text-accent">
                {study.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {study.summary}
              </p>
              <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted group-hover:text-foreground transition-colors">
                View case study →
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <div className="mt-10 text-center">
        <Link
          href="/work"
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
        >
          View all work →
        </Link>
      </div>
    </Section>
  );
}
