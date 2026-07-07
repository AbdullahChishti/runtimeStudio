export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  intro: string;
  capabilities: string[];
  problems: string[];
  approach: string[];
  outcomes: string[];
  relatedCaseStudySlugs: string[];
};

export const services: Service[] = [
  {
    slug: "quality-engineering",
    number: "01",
    title: "Quality Engineering",
    shortDescription:
      "Modern QA strategy, test automation, and release confidence for teams shipping at pace.",
    intro:
      "Quality engineering at Runtime Studio goes beyond manual testing. We help teams build automated quality systems — from CI pipelines to AI-aware test strategies — that keep pace with modern delivery.",
    capabilities: [
      "Test strategy & architecture",
      "End-to-end & API test automation",
      "CI/CD quality gates",
      "Performance & load testing",
      "AI system testing & evaluation",
      "Release readiness frameworks",
      "QA team enablement & coaching",
    ],
    problems: [
      "Releases blocked by manual regression cycles",
      "Flaky tests eroding team confidence",
      "No clear quality strategy as the product scales",
      "AI features shipped without systematic validation",
      "QA bottleneck slowing engineering velocity",
    ],
    approach: [
      "Assess current test coverage, tooling, and release process",
      "Design a pragmatic automation strategy aligned to risk",
      "Implement foundational frameworks and critical path coverage",
      "Integrate quality gates into CI/CD pipelines",
      "Enable your team with documentation and knowledge transfer",
    ],
    outcomes: [
      "Faster, more confident releases",
      "Reduced regression testing time",
      "Clear quality metrics and reporting",
      "Self-sufficient internal QA capability",
    ],
    relatedCaseStudySlugs: [
      "qa-automation-transformation",
      "ai-testing-platform",
    ],
  },
  {
    slug: "ai-services",
    number: "02",
    title: "AI Services",
    shortDescription:
      "LLM evaluation, AI system design, and production-ready AI infrastructure for real-world applications.",
    intro:
      "We help companies move from AI prototypes to reliable production systems. Our work spans evaluation frameworks, RAG architecture, agent design, and the operational infrastructure AI systems require.",
    capabilities: [
      "LLM evaluation & benchmarking",
      "RAG system design & optimisation",
      "AI agent architecture",
      "Prompt engineering & fine-tuning strategy",
      "AI observability & monitoring",
      "Knowledge platform development",
      "AI safety & reliability frameworks",
    ],
    problems: [
      "AI demos that fail in production",
      "No systematic way to evaluate model outputs",
      "Hallucinations and reliability issues at scale",
      "Unclear ROI on AI investments",
      "Knowledge scattered across tools and teams",
    ],
    approach: [
      "Define measurable success criteria for AI features",
      "Build evaluation datasets and automated scoring pipelines",
      "Design architecture for retrieval, context, and fallback behaviour",
      "Implement monitoring for drift, latency, and quality degradation",
      "Iterate with structured feedback loops and human-in-the-loop review",
    ],
    outcomes: [
      "Production AI systems with defined quality thresholds",
      "Reduced time to validate AI feature releases",
      "Clear evaluation metrics stakeholders can trust",
      "Scalable knowledge and retrieval infrastructure",
    ],
    relatedCaseStudySlugs: ["ai-knowledge-platform", "ai-testing-platform"],
  },
  {
    slug: "software-engineering",
    number: "03",
    title: "Software Engineering",
    shortDescription:
      "Senior engineering for modern web applications, APIs, and platform infrastructure.",
    intro:
      "When you need experienced engineers embedded in your team, we deliver. From greenfield builds to critical refactors, we bring production-grade engineering practices and deep technical expertise.",
    capabilities: [
      "Full-stack web development",
      "API design & microservices",
      "Platform & infrastructure engineering",
      "Technical debt reduction",
      "Code review & architecture guidance",
      "Developer experience improvements",
      "Migration & modernisation projects",
    ],
    problems: [
      "Critical features blocked by capacity constraints",
      "Legacy systems limiting product velocity",
      "Architecture decisions made without senior input",
      "Inconsistent code quality across teams",
      "Platform instability under growing load",
    ],
    approach: [
      "Embed senior engineers within your existing workflows",
      "Establish coding standards and review practices",
      "Prioritise high-impact work with clear delivery milestones",
      "Document architecture decisions and system boundaries",
      "Transfer ownership to your team with structured handover",
    ],
    outcomes: [
      "Shipped features with production-quality code",
      "Improved system reliability and performance",
      "Clearer architecture and reduced technical debt",
      "Stronger internal engineering capability",
    ],
    relatedCaseStudySlugs: ["ai-knowledge-platform"],
  },
  {
    slug: "technology-consulting",
    number: "04",
    title: "Technology Consulting",
    shortDescription:
      "Strategic technical guidance for leaders navigating complex technology decisions.",
    intro:
      "For founders and engineering leaders facing critical decisions — build vs buy, team structure, technology selection, or delivery transformation — we provide honest, experienced perspective.",
    capabilities: [
      "Technology strategy & roadmapping",
      "Architecture reviews & audits",
      "Build vs buy analysis",
      "Team structure & hiring guidance",
      "Vendor & tool evaluation",
      "Delivery process optimisation",
      "Technical due diligence",
    ],
    problems: [
      "Unclear technology direction slowing the business",
      "Expensive tools or platforms that don't deliver",
      "Engineering team structure misaligned to goals",
      "Investors or boards requesting technical assessment",
      "Delivery timelines consistently missed",
    ],
    approach: [
      "Structured discovery with stakeholders and engineering leads",
      "Honest assessment of current state and constraints",
      "Options analysis with trade-offs clearly articulated",
      "Actionable recommendations prioritised by impact",
      "Optional hands-on support to implement decisions",
    ],
    outcomes: [
      "Clear technology roadmap aligned to business goals",
      "Confident decisions backed by engineering evidence",
      "Reduced waste on misaligned investments",
      "Stronger alignment between engineering and leadership",
    ],
    relatedCaseStudySlugs: ["qa-automation-transformation"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((service) => service.slug);
}
