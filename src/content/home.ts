import type { ServiceAccent } from "@/content/services";

export type ServiceGroup = {
  title: string;
  description: string;
  tags: string[];
  accent: ServiceAccent;
  slug: string;
};

export const servicesContent = {
  label: "What we do",
  title: "End-to-end tech & growth services",
  subtitle:
    "From AI systems and custom software to automation and reliability, we design, build, and operationalise solutions that scale with your business.",
  groups: [
    {
      title: "AI operational systems",
      description:
        "Design and implement AI-powered workflows, agents, and copilots that automate repetitive work and improve business efficiency over time.",
      tags: [
        "AI Development",
        "AI Automation",
        "AI Strategy & Consulting",
        "AI Assistants",
        "AI Adoption",
      ],
      accent: "violet",
      slug: "ai-services",
    },
    {
      title: "Software engineering",
      description:
        "Custom web, mobile, and SaaS products built for scalability, performance, and long-term operational efficiency.",
      tags: ["Web", "Mobile", "SaaS Platforms", "APIs", "MVPs"],
      accent: "amber",
      slug: "software-engineering",
    },
    {
      title: "Quality engineering",
      description:
        "Build robust, reliable software with automated quality systems that keep pace with modern delivery and prevent defects before release.",
      tags: [
        "Test Automation",
        "CI/CD Quality Gates",
        "Performance Testing",
        "Release Readiness",
      ],
      accent: "teal",
      slug: "quality-engineering",
    },
    {
      title: "Technology consulting",
      description:
        "Strategic technical guidance for leaders navigating complex decisions — architecture, build vs buy, team structure, and delivery transformation.",
      tags: [
        "Technology Strategy",
        "Architecture Reviews",
        "Due Diligence",
        "Delivery Optimisation",
      ],
      accent: "indigo",
      slug: "technology-consulting",
    },
  ] satisfies ServiceGroup[],
};

export const commitmentContent = {
  statement:
    "At Runtime Studio, we don't just build — we commit. Weekends, deadlines, crunch time: we're your trusted engineering partner in every sense.",
  cta: "About us",
  href: "/about",
};

export const caseStudiesContent = {
  title: "Real work, real wins",
  subtitle:
    "We deliver more than just code — we build lasting partnerships that drive real, measurable results for the teams we work with.",
};

export const insightsContent = {
  title: "Latest Insights",
  subtitle:
    "Stay ahead with our expert analysis on quality engineering, AI systems, and modern software delivery. From deep dives to practical guides.",
};

export const ctaContent = {
  label: "Let's build",
  title: "We put the runtime in Runtime Studio.",
  subtitle:
    "Need a dedicated strategic tech and growth partner? Book a free, no-obligation consultation. We'll discuss your project and map a path from strategy to a system that ships.",
  cta: "Book a free consultation",
};
