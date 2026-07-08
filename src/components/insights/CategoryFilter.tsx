"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { articleCategories } from "@/content/articles";
import { cn } from "@/lib/utils";

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "All";

  return (
    <div className="flex flex-wrap gap-2">
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
            className={cn(
              "inline-flex items-center rounded-sm border px-3 py-2 text-sm transition-colors",
              active
                ? "border-accent bg-accent text-white"
                : "border-border text-muted hover:border-border-strong hover:text-foreground",
            )}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}