"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { articleCategories } from "@/content/articles";
import { cn } from "@/lib/utils";

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "All";

  return (
    <div
      className="inline-flex flex-wrap items-center justify-center gap-1 border-b border-border pb-1 sm:gap-2"
      role="tablist"
      aria-label="Filter articles by category"
    >
      {articleCategories.map((category) => {
        const active = selectedCategory === category;
        const href =
          category === "All"
            ? "/insights"
            : `/insights?category=${encodeURIComponent(category)}`;

        return (
          <Link
            key={category}
            href={href}
            role="tab"
            aria-selected={active}
            className={cn(
              "relative px-2 py-2 text-sm font-medium transition-colors sm:px-3",
              active ? "text-foreground" : "text-muted hover:text-foreground",
            )}
          >
            {category}
            {active && (
              <motion.span
                layoutId="active-category"
                className="absolute inset-x-2 -bottom-1 h-0.5 bg-accent"
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
