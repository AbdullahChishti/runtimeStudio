import { insightsContent } from "@/content/home";
import { articles } from "@/content/articles";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { Button } from "@/components/ui/Button";

const categoryHueMap: Record<string, number> = {
  "Quality Engineering": 262,
  "AI Systems": 196,
  "Software Engineering": 158,
};

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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            article={article}
            categoryHue={categoryHueMap[article.category] ?? 24}
          />
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <Button href="/insights" variant="secondary" size="lg">
          View all insights
        </Button>
      </div>
    </Section>
  );
}
