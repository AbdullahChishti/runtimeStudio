"use client";

import { articles } from "@/content/articles";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { categoryAccentColors } from "@/components/home/Accents";

const InsightCard = ({
  article,
  index,
}: {
  article: (typeof articles)[number];
  index: number;
}) => {
  const accent = categoryAccentColors[article.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <Link href={`/insights/${article.slug}`}>
        <span
          className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider"
          style={{ color: accent }}
        >
          {article.category}
        </span>
        <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="mb-4 text-lg text-muted-foreground">
          {article.description}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{article.readingTime}</span>
          <span>{article.date}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export function InsightsSection() {
  const featuredArticles = articles.slice(0, 3); // Displaying first 3 articles as a preview

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-5xl font-bold tracking-tight text-foreground"
        >
          Latest Insights
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <InsightCard key={article.slug} article={article} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/insights"
            className="group inline-flex items-center justify-center rounded-full border border-input bg-background px-8 py-3 text-lg font-medium text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            View All Insights
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
