import { notFound } from "next/navigation";
import { getAllArticleSlugs, getArticleBySlug } from "@/content/articles";
import { GenerativeBackground } from "@/components/ui/GenerativeBackground";
import { createMetadata } from "@/lib/metadata";

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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative isolate min-h-screen">
      <GenerativeBackground className="absolute inset-0 z-0" density={0.5} accentRatio={0.05} />
      <article className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
        <header className="mb-12 text-center">
          <p className="label-sans text-accent-muted mb-2">{article.category}</p>
          <h1 className="heading-display text-balance mb-4">
            {article.title}
          </h1>
          <p className="description-standard text-muted-light mx-auto max-w-2xl text-pretty">
            {article.description}
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-muted-subtle label-mono">
            <span>{article.date}</span>
            <span>{article.readingTime}</span>
          </div>
        </header>

        <div className="mx-auto mt-8 max-w-2xl leading-loose">
            {article.content.map((paragraph, index) => (
                <p key={index} className="description-standard mb-4">
                    {paragraph}
                </p>
            ))}
        </div>
      </article>
    </div>
  );
}
