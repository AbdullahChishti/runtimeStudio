export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readingTime: string;
  date: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "testing-ai-systems-traditional-qa-not-enough",
    category: "Quality Engineering",
    title: "Testing AI Systems: Why Traditional QA Is Not Enough",
    description:
      "Non-deterministic outputs, evolving models, and context-dependent behaviour demand a new approach to quality assurance for AI-powered products.",
    readingTime: "8 min read",
    date: "2026-05-15",
    content: [
      "Traditional QA was built for deterministic systems. Given the same input, you expect the same output — every time. AI systems break this contract. A language model can produce valid, different responses to identical prompts. Retrieval systems return different context depending on index state. Agents take variable paths to reach goals.",
      "This doesn't mean AI systems can't be tested. It means the testing paradigm must shift from exact matching to evaluation against criteria: relevance, accuracy, safety, consistency within bounds, and regression against baselines.",
      "At Runtime Studio, we approach AI testing with three layers: unit-level validation of components (retrieval, parsing, tool calls), integration testing of pipelines with golden datasets, and continuous evaluation in staging environments that mirror production traffic patterns.",
      "The teams that ship AI products confidently aren't the ones with the most tests — they're the ones with the clearest definition of 'good enough' and automated ways to measure it.",
    ],
  },
  {
    slug: "llm-evaluation-core-engineering-discipline",
    category: "AI Systems",
    title: "How LLM Evaluation Is Becoming a Core Engineering Discipline",
    description:
      "Evaluation is no longer a research afterthought. It's becoming as fundamental to AI engineering as unit testing is to traditional software.",
    readingTime: "6 min read",
    date: "2026-04-22",
    content: [
      "Two years ago, LLM evaluation was mostly an academic exercise. Teams shipped features and hoped for the best, relying on user complaints as their primary feedback loop. That era is ending.",
      "Forward-thinking engineering teams are building evaluation pipelines alongside their features — not after them. They maintain golden datasets, run automated scoring on every change, and track quality metrics over time the same way they track latency and error rates.",
      "The tooling is maturing: LLM-as-judge evaluators, human preference datasets, regression baselines, and A/B testing frameworks designed for non-deterministic systems. But tooling alone isn't enough.",
      "What's needed is organisational commitment: evaluation metrics defined before features ship, quality thresholds agreed with stakeholders, and evaluation results treated as release gates — not nice-to-have reports.",
    ],
  },
  {
    slug: "building-modern-quality-engineering-strategy",
    category: "Quality Engineering",
    title: "Building a Modern Quality Engineering Strategy",
    description:
      "A practical framework for teams moving beyond manual testing toward engineering-led quality systems.",
    readingTime: "10 min read",
    date: "2026-03-08",
    content: [
      "Most quality strategies fail not because teams lack tools, but because they lack clarity. What are we testing? Why? What's the risk if we miss it? Without answers, automation becomes an expensive checkbox exercise.",
      "A modern quality engineering strategy starts with risk mapping: identify critical user journeys, data integrity paths, and integration points. Prioritise automation where failure cost is highest and change frequency is greatest.",
      "Layer your approach: fast smoke tests on every commit, targeted regression on merge, comprehensive suites on schedule, and exploratory testing for the unknowns automation can't catch.",
      "Measure what matters: defect escape rate, mean time to detect, test execution time, and flakiness ratio. These metrics tell you whether your strategy is working — not how many tests you've written.",
      "Finally, treat quality as a team responsibility, not a QA department function. Engineers who write code should own its testability. QA engineers should architect systems, not just execute scripts.",
    ],
  },
];

export const articleCategories = [
  "All",
  "Quality Engineering",
  "AI Systems",
  "Software Engineering",
] as const;

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs() {
  return articles.map((article) => article.slug);
}

export function getArticlesByCategory(category: string) {
  if (category === "All") return articles;
  return articles.filter((article) => article.category === category);
}
