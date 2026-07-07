"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { getArticleBySlug } from "@/content/articles";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { categoryAccentColors } from "@/components/home/Accents";

interface InsightArticleClientProps {
  article: ReturnType<typeof getArticleBySlug>;
}

export default function InsightArticleClient({ article }: InsightArticleClientProps) {
  const router = useRouter();

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Article Not Found
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          The article you are looking for does not exist.
        </p>
        <Link href="/insights" className="text-primary hover:underline">
          Back to Insights
        </Link>
      </div>
    );
  }

  const accentColor = categoryAccentColors[article.category];

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/insights"
        className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeftIcon className="mr-2 h-5 w-5" />
        Back to Insights
      </Link>

      <header className="mb-12 text-center">
        <p
          className="mb-2 text-sm font-semibold uppercase tracking-wider"
          style={{ color: accentColor }}
        >
          {article.category}
        </p>
        <h1 className="mb-4 text-5xl font-bold leading-tight text-foreground">
          {article.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {article.description}
        </p>
        <div className="mt-6 text-muted-foreground">
          <span>{article.readingTime}</span> &bull; <span>{article.date}</span>
        </div>
      </header>

      <div className="prose prose-lg mx-auto text-foreground prose-h2:text-foreground prose-h3:text-foreground prose-a:text-primary">
        {article.content.map((paragraph, index) => (
          <p key={index} className="mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
