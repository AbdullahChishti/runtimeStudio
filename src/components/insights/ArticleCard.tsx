import Link from "next/link";
import { Article } from "@/content/articles";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  categoryHue: number; // Dynamic hue based on category
};

export function ArticleCard({ article, categoryHue }: ArticleCardProps) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={cn(
        "card card-interactive spectral-edge group block h-full",
      )}
      style={{ "--signal-hue": categoryHue } as React.CSSProperties}
    >
      <article className="p-6 flex flex-col justify-between h-full">
        <div>
          <p className="label-sans mb-2 text-accent-muted group-hover:text-accent transition-colors duration-300">
            {article.category}
          </p>
          <h3 className="heading-card text-balance mb-3 group-hover:text-foreground transition-colors duration-300">
            {article.title}
          </h3>
          <p className="description-sm text-muted group-hover:text-muted-light transition-colors duration-300">
            {article.description}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs text-muted-subtle label-mono">
          <span>{article.date}</span>
          <span>{article.readingTime}</span>
        </div>
      </article>
    </Link>
  );
}
