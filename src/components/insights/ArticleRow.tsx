"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Article } from "@/content/articles";
import { cn, formatDate } from "@/lib/utils";

type ArticleRowProps = {
  article: Article;
  index: number;
  featured?: boolean;
};

const categoryColorClass: Record<string, string> = {
  "Quality Engineering": "text-accent-teal",
  "AI Systems": "text-accent-indigo",
  "Software Engineering": "text-accent-coral",
};

export function ArticleRow({ article, index, featured }: ArticleRowProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-b border-border first:border-t"
    >
      <Link
        href={`/insights/${article.slug}`}
        className="flex flex-col gap-4 py-8 sm:py-10 lg:py-12"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between">
          <div className="flex-1">
            <p
              className={cn(
                "label-mono mb-3",
                categoryColorClass[article.category] ?? "text-accent",
              )}
            >
              {article.category}
            </p>
            <h3
              className={cn(
                "text-balance transition-colors duration-200 group-hover:text-accent",
                featured ? "heading-section" : "heading-block",
              )}
            >
              {article.title}
            </h3>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-subtle label-mono lg:flex-col lg:items-end lg:gap-1">
            <span>{formatDate(article.date)}</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
        <p className="description-standard max-w-3xl text-balance">
          {article.description}
        </p>
      </Link>
    </motion.article>
  );
}
