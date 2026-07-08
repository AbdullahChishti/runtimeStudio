import { notFound } from "next/navigation";
import React from "react";
import {
  articles,
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/content/articles";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Prose } from "@/components/ui/Prose";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/metadata";
import { cn, formatDate, withBasePath } from "@/lib/utils";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${slug}`,
    type: "article",
  });
}

const categoryColorClass: Record<string, string> = {
  "Quality Engineering": "text-accent-teal",
  "AI Systems": "text-accent-indigo",
  "Software Engineering": "text-accent-coral",
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const previousArticle = articles[currentIndex - 1] ?? null;
  const nextArticle = articles[currentIndex + 1] ?? null;

  return (
    <div className="relative isolate min-h-screen">
      <section className="border-b border-border pt-24 pb-10 lg:pt-32 lg:pb-14">
        <Container size="prose">
          <span
            className={cn(
              "label-mono",
              categoryColorClass[article.category] ?? "text-accent",
            )}
          >
            {article.category}
          </span>
          <h1 className="heading-display mt-4 text-balance">
            {article.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-xs text-muted-subtle label-mono">
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
        </Container>
      </section>

      <Container size="prose" className="relative z-10 pb-24 lg:pb-32">
        <article>
          <Prose>
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Prose>
        </article>

        <Divider className="my-16" />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Button href={withBasePath("/insights")} variant="ghost">
            ← All insights
          </Button>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            {previousArticle && (
              <a
                href={withBasePath(`/insights/${previousArticle.slug}`)}
                className="group text-left"
              >
                <span className="label-mono mb-1 block text-muted-subtle">
                  Previous
                </span>
                <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  {previousArticle.title}
                </span>
              </a>
            )}
            {nextArticle && (
              <a
                href={withBasePath(`/insights/${nextArticle.slug}`)}
                className="group text-left sm:text-right"
              >
                <span className="label-mono mb-1 block text-muted-subtle">
                  Next
                </span>
                <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  {nextArticle.title}
                </span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
