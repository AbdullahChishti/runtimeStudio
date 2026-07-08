import { caseStudies } from "@/content/caseStudies";
import type { ServiceAccent } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";

const accentRotation: ServiceAccent[] = ["teal", "indigo", "amber", "violet"];

export function PortfolioList() {
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard
            key={caseStudy.slug}
            caseStudy={caseStudy}
            accent={accentRotation[index % accentRotation.length]}
          />
        ))}
      </div>
    </Container>
  );
}