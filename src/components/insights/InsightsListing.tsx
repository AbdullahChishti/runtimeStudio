"use client";

import Link from "next/link";
import { useState } from "react";
import {
  articleCategories,
  getArticlesByCategory,
} from "@/content/articles";
import { formatDate } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function InsightsListing() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filtered = getArticlesByCategory(activeCategory);

  return (
    <>
      <section className="border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-20">
        <Container size="narrow">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Insights
            </p>
            <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Engineering perspectives.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Practical thinking on quality engineering, AI systems, and modern
              software development from engineers who ship production code.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-[var(--spacing-section-sm)] lg:py-[var(--spacing-section)]">
        <Container>
          <div
            className="mb-12 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Article categories"
          >
            {articleCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors",
                  activeCategory === category
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted hover:border-border-strong hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {filtered.map((article, index) => (
              <FadeIn key={article.slug} delay={index * 0.05}>
                <Link href={`/insights/${article.slug}`} className="group block">
                  <Badge>{article.category}</Badge>
                  <h2 className="mt-4 text-xl font-medium tracking-tight text-foreground group-hover:text-accent">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-light">
                    <span>{article.readingTime}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
