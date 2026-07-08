import { caseStudiesContent } from "@/content/home";
import { getFeaturedCaseStudies } from "@/content/caseStudies";
import { getCaseStudyAccent } from "@/components/work/caseStudyAccents";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { Button } from "@/components/ui/Button";

export function CaseStudiesSection() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <Section border accent="teal" field="dots">
      <SectionHeader
        label="Case studies"
        title={caseStudiesContent.title}
        description={caseStudiesContent.subtitle}
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredCaseStudies.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.slug}
            caseStudy={caseStudy}
            accent={getCaseStudyAccent(caseStudy.slug)}
          />
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <Button href="/work" variant="secondary" size="lg">
          View all case studies
        </Button>
      </div>
    </Section>
  );
}
