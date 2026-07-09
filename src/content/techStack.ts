import type { ServiceAccent } from "@/content/services";

export type TechCategory = {
  category: string;
  scope: string;
  description: string;
  tools: string[];
  accent: ServiceAccent;
};

export const techStackContent = {
  label: "Tech stack",
  title: "Our cutting-edge tech stack",
  subtitle:
    "Not sure which tech stack is right for your project? We select proven, production-grade tools for each layer of the system.",
};

export const techStack: TechCategory[] = [
  {
    category: "Cloud, DevOps & scalability",
    scope: "hosting, deployment, scaling, infrastructure",
    description:
      "We manage cloud infrastructure and deployment systems that support secure scaling, stable performance, and long-term product growth.",
    tools: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD pipelines",
      "Vercel",
    ],
    accent: "teal",
  },
  {
    category: "AI, LLMs & automation",
    scope: "AI features, agents, workflows, rapid prototyping",
    description:
      "We use AI and rapid-development tools to automate workflows, accelerate delivery, and validate ideas faster with lower upfront cost.",
    tools: [
      "OpenAI",
      "Anthropic Claude",
      "LLaMA",
      "LangChain",
      "Zapier",
      "Make",
    ],
    accent: "violet",
  },
  {
    category: "Core development",
    scope: "custom logic, backend/frontend, integrations",
    description:
      "We build scalable, production-ready applications using modern frameworks and modular architecture tailored to your product and goals.",
    tools: [
      "Node.js",
      "Python",
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
    ],
    accent: "amber",
  },
  {
    category: "Databases & data management",
    scope: "storage, structure, performance, reliability",
    description:
      "We design reliable database systems optimised for performance, scalability, and long-term stability across growing applications.",
    tools: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Supabase",
      "Redis",
    ],
    accent: "indigo",
  },
];
