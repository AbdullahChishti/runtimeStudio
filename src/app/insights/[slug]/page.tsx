import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/content/articles";
import { formatDate } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
        <Container size="narrow">
          <FadeIn>
            <Link
              href="/insights"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              ← All insights
            </Link>
            <div className="mt-8">
              <Badge>{article.category}</Badge>
            </div>
            <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {article.description}
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-light">
              <span>{article.readingTime}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section>
        <Container size="narrow">
          <FadeIn>
            <div className="prose-spacing space-y-6">
              {article.content.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {otherArticles.length > 0 && (
        <Section border className="bg-surface-elevated">
          <Container>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              More insights
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  href={`/insights/${other.slug}`}
                  className="group"
                >
                  <Badge>{other.category}</Badge>
                  <h2 className="mt-3 text-lg font-medium text-foreground group-hover:text-accent">
                    {other.title}
                  </h2>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
