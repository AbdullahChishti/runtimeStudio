import { CaseStudy } from "@/content/caseStudies";
import type { ServiceAccent } from "@/content/services";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CaseStudyVisual } from "@/components/work/CaseStudyVisual";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  accent: ServiceAccent;
}

export function CaseStudyCard({ caseStudy, accent }: CaseStudyCardProps) {
  return (
    <Card
      href={`/work/${caseStudy.slug}`}
      interactive
      padding="none"
      className="group h-full overflow-hidden"
    >
      <CaseStudyVisual slug={caseStudy.slug} accent={accent} className="aspect-video w-full" />
      <div className="p-6">
        <Badge variant="neutral">{caseStudy.industry}</Badge>
        <h3 className="mt-4 heading-card text-foreground">{caseStudy.title}</h3>
        <p className="mt-2 line-clamp-3 description-sm">{caseStudy.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div>
            <span className="text-2xl font-medium tracking-tight text-foreground">
              {caseStudy.metric}
            </span>
            <span className="ml-2 label-mono text-muted-light">
              {caseStudy.metricLabel}
            </span>
          </div>
          <span className="label-mono text-accent-strong transition-colors group-hover:text-accent">
            View &rarr;
          </span>
        </div>
      </div>
    </Card>
  );
}
