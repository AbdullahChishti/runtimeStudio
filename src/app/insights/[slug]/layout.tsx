import { articles, getArticleBySlug } from "@/content/articles";
import { createMetadata } from "@/lib/metadata";
import React from 'react';

interface InsightArticleLayoutProps {
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
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

export default function InsightArticleLayout({ children }: InsightArticleLayoutProps) {
  return <>{children}</>;
}
