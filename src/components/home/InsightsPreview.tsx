import Link from "next/link";
import { articles } from "@/content/articles";
import { formatDate } from "@/lib/utils";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader } from "@/components/ui/Section";

export function InsightsPreview() {
  const preview = articles.slice(0, 3);

  return (
    <Section border>
      <SectionHeader
        label="Insights"
        title="Perspectives on quality, AI, and engineering."
        description="Practical thinking from engineers who build and ship production systems."
      />

      <StaggerChildren className="grid gap-8 lg:grid-cols-3">
        {preview.map((article) => (
          <StaggerItem key={article.slug}>
            <Link
              href={`/insights/${article.slug}`}
              className="group flex h-full flex-col"
            >
              <Badge>{article.category}</Badge>
              <h3 className="mt-4 text-lg font-medium tracking-tight text-foreground group-hover:text-accent">
                {article.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {article.description}
              </p>
              <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-light">
                <span>{article.readingTime}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <div className="mt-10 text-center">
        <Link
          href="/insights"
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
        >
          Read all insights →
        </Link>
      </div>
    </Section>
  );
}
