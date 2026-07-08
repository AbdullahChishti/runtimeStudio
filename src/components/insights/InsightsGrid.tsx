"use client";

import { useSearchParams } from "next/navigation";
import { getArticlesByCategory, articleCategories } from "@/content/articles";
import { ArticleCard } from "./ArticleCard";

/**
 * Client-side category filtering. Static export (`output: export`) has no
 * server to re-render per query string, so filtering happens here against
 * the current URL's search params after hydration instead of in the page's
 * server component.
 */
export function InsightsGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "All";
  const articles = getArticlesByCategory(category);

  // A mapping to assign a consistent hue to each category
  const categoryHueMap: { [key: string]: number } = {};
  articleCategories.forEach((cat, index) => {
    // Use spectral hues, or a default if there aren't enough distinct spectral hues
    const spectralHues = [262, 196, 158, 92, 34, 336]; // spectral-1 to spectral-6
    categoryHueMap[cat] = spectralHues[index % spectralHues.length] || 24; // Default to signal-hue
  });

  if (articles.length === 0) {
    return (
      <p className="description-sm" role="status">
        No articles in this category yet.
      </p>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.slug}
          article={article}
          categoryHue={categoryHueMap[article.category] || 24} // Default to signal-hue
        />
      ))}
    </div>
  );
}
