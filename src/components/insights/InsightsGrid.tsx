"use client";

import { useSearchParams } from "next/navigation";
import { getArticlesByCategory } from "@/content/articles";
import { ArticleRow } from "./ArticleRow";

export function InsightsGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "All";
  const articles = getArticlesByCategory(category);

  if (articles.length === 0) {
    return (
      <p className="description-sm text-center" role="status">
        No articles in this category yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      {articles.map((article, index) => (
        <ArticleRow
          key={article.slug}
          article={article}
          index={index}
        />
      ))}
    </div>
  );
}
