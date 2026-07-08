import { articles } from "@/content/articles";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArticleRow } from "@/components/insights/ArticleRow";
import { Button } from "@/components/ui/Button";
import { insightsContent } from "@/content/home";
import { withBasePath } from "@/lib/utils";

export function InsightsSection() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <Section border>
      <SectionHeader
        label="Insights"
        title={insightsContent.title}
        description={insightsContent.subtitle}
        align="center"
      />
      <div className="flex flex-col">
        {featuredArticles.map((article, index) => (
          <ArticleRow
            key={article.slug}
            article={article}
            index={index}
          />
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <Button href={withBasePath("/insights")} variant="secondary" size="lg">
          View all insights
        </Button>
      </div>
    </Section>
  );
}
