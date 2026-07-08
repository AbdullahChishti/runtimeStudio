import { notFound } from "next/navigation";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/content/caseStudies";
import { createMetadata } from "@/lib/metadata";
import { ImmersiveCaseStudy } from "@/components/work/ImmersiveCaseStudy";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return createMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return <ImmersiveCaseStudy study={study} />;
}
