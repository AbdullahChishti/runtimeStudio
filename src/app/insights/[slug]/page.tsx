import { articles, getArticleBySlug } from "@/content/articles";
import { createMetadata } from "@/lib/metadata";
import InsightArticleClient from "./InsightArticleClient";
import { notFound } from "next/navigation";

interface InsightArticleProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightArticleProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {};
  }
  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
  });
}

export default function InsightArticle({ params }: InsightArticleProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <InsightArticleClient article={article} />;
}
