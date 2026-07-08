export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  context: string;
  approach: string[];
  solution: string;
  technologies: string[];
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  relatedServiceSlugs: string[];
  featured: boolean;
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-testing-platform",
    title: "AI Testing Platform",
    client: "Confidential — AI Product Company",
    industry: "Artificial Intelligence",
    summary:
      "Built an automated evaluation platform for AI feature releases, enabling continuous validation across model versions.",
    metric: "60%",
    metricLabel: "faster release validation",
    challenge:
      "The client's AI product shipped weekly, but manual evaluation of model outputs took days. Release confidence was low, and regressions frequently reached production.",
    context:
      "A fast-growing AI company with multiple LLM-powered features needed a systematic way to validate changes before release. Their QA team lacked tooling designed for non-deterministic AI outputs.",
    approach: [
      "Mapped critical user journeys and defined evaluation criteria per feature",
      "Designed a test harness integrating with their CI pipeline",
      "Built automated scoring using LLM-as-judge and rule-based validators",
      "Created dashboards for release readiness and regression tracking",
      "Trained the internal QA team on maintaining evaluation datasets",
    ],
    solution:
      "We delivered a custom AI testing platform integrated into their release pipeline. Automated evaluation runs on every pull request, scoring outputs against golden datasets and regression baselines. Release managers get a clear go/no-go signal before deployment.",
    technologies: [
      "Python",
      "Playwright",
      "GitHub Actions",
      "OpenAI API",
      "PostgreSQL",
      "Custom evaluation framework",
    ],
    results: [
      "60% reduction in release validation time",
      "Automated evaluation on every PR",
      "Clear regression detection before production",
      "Internal team fully trained on platform maintenance",
    ],
    testimonial: {
      quote:
        "Placeholder testimonial — Runtime Studio transformed how we validate AI features. We now ship with confidence instead of hope.",
      author: "Engineering Director",
      role: "AI Product Company",
    },
    relatedServiceSlugs: ["quality-engineering", "ai-services"],
    featured: true,
    // image intentionally omitted — no real asset exists yet. Add a file under
    // public/images/case-studies/ and set this once available.
  },
  {
    slug: "qa-automation-transformation",
    title: "QA Automation Transformation",
    client: "Confidential — B2B SaaS Scaleup",
    industry: "Enterprise Software",
    summary:
      "Overhauled regression testing with a modern automation framework, freeing the team to focus on exploratory and AI-aware testing.",
    metric: "70%",
    metricLabel: "reduction in regression testing time",
    challenge:
      "A 200-person SaaS company spent four days on manual regression before each release. Test coverage was inconsistent, and the QA team was a bottleneck.",
    context:
      "The scaleup was releasing bi-weekly but their QA process hadn't evolved since Series A. Manual testing consumed most of the QA team's capacity, leaving little room for strategic quality work.",
    approach: [
      "Audited existing test coverage and identified critical path gaps",
      "Selected and implemented Playwright as the core automation framework",
      "Built page object models and reusable test utilities",
      "Integrated automated suites into GitLab CI with quality gates",
      "Established a test maintenance playbook for the internal team",
    ],
    solution:
      "We implemented a layered automation strategy: smoke tests on every commit, regression suites on merge to main, and nightly full runs. Critical user journeys were covered end-to-end, with API-level tests for backend validation.",
    technologies: [
      "Playwright",
      "TypeScript",
      "GitLab CI",
      "Docker",
      "Allure Reporting",
    ],
    results: [
      "70% reduction in manual regression testing time",
      "Release cycle shortened from bi-weekly to weekly",
      "Zero critical regressions in first three months post-launch",
      "QA team reallocated 60% of time to strategic testing",
    ],
    testimonial: {
      quote:
        "Placeholder testimonial — They didn't just write tests. They rebuilt our entire approach to quality and made our team self-sufficient.",
      author: "VP of Engineering",
      role: "B2B SaaS Scaleup",
    },
    relatedServiceSlugs: ["quality-engineering", "technology-consulting"],
    featured: true,
    // image intentionally omitted — no real asset exists yet.
  },
  {
    slug: "ai-knowledge-platform",
    title: "AI Knowledge Platform",
    client: "Confidential — Professional Services Firm",
    industry: "Professional Services",
    summary:
      "Designed and built an internal knowledge retrieval system, making institutional expertise searchable and actionable.",
    metric: "50%",
    metricLabel: "reduction in information discovery time",
    challenge:
      "Critical knowledge lived in Slack threads, Google Docs, and people's heads. New team members took months to become productive, and experts were constantly interrupted.",
    context:
      "A 500-person professional services firm needed to capture and surface institutional knowledge. Previous search tools returned irrelevant results and couldn't handle nuanced queries.",
    approach: [
      "Mapped knowledge sources and defined ingestion pipelines",
      "Designed RAG architecture with chunking and metadata strategies",
      "Built evaluation framework to measure retrieval quality",
      "Implemented access controls aligned to existing permissions",
      "Ran pilot with two departments before firm-wide rollout",
    ],
    solution:
      "We delivered a knowledge platform with semantic search, source attribution, and confidence scoring. The system ingests documents, wikis, and meeting notes, making expert knowledge accessible through natural language queries.",
    technologies: [
      "Python",
      "Next.js",
      "PostgreSQL + pgvector",
      "OpenAI Embeddings",
      "AWS",
      "LangChain",
    ],
    results: [
      "50% reduction in time spent searching for information",
      "Adopted by 80% of target departments within 90 days",
      "Measurable improvement in new hire onboarding speed",
      "Reduced expert interruption requests by 35%",
    ],
    testimonial: {
      quote:
        "Placeholder testimonial — For the first time, our team's collective knowledge is actually usable. The evaluation framework gave us confidence it works.",
      author: "Chief Operating Officer",
      role: "Professional Services Firm",
    },
    relatedServiceSlugs: ["ai-services", "software-engineering"],
    featured: true,
    // image intentionally omitted — no real asset exists yet.
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((study) => study.featured);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
