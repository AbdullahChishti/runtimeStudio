import type { ServiceAccent } from "@/content/services";

export const CASE_STUDY_ACCENTS: Record<string, ServiceAccent> = {
  "ai-testing-platform": "violet",
  "qa-automation-transformation": "teal",
  "ai-knowledge-platform": "indigo",
};

export function getCaseStudyAccent(slug: string): ServiceAccent {
  return CASE_STUDY_ACCENTS[slug] ?? "indigo";
}
