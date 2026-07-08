import { caseStudies } from "@/content/caseStudies";
import type { ServiceAccent } from "@/content/services";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

type RelatedCaseStudiesProps = {
  slugs: string[];
  accent: ServiceAccent;
};

export function RelatedCaseStudies({ slugs, accent }: RelatedCaseStudiesProps) {
  const accentVariantMap = {
    teal: "teal",
    violet: "indigo",
    amber: "coral",
    indigo: "indigo",
  } as const;

  const related = caseStudies.filter((study) => slugs.includes(study.slug));

  if (related.length === 0) return null;

  return (
    <Section className="border-t border-border">
      <SectionHeader
        label="Case studies"
        title="Related outcomes"
        description="Examples of similar delivery work and measurable impact."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {related.map((study) => (
          <Card key={study.slug} href={`/work/${study.slug}`} interactive>
            <Badge variant={accentVariantMap[accent]}>{study.industry}</Badge>
            <h3 className="mt-4 text-2xl font-medium text-foreground">
              {study.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">{study.summary}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}