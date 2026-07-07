export const company = {
  tagline: "Better software. Smarter systems. Built with confidence.",
  hero: {
    headline: "We help companies build better software and smarter AI systems.",
    supporting:
      "Runtime Studio is a technology consultancy specialising in quality engineering, AI systems, automation, and modern software development.",
    primaryCta: "Start a project",
    secondaryCta: "Explore our work",
  },
  trust: {
    label: "Trusted by teams building ambitious products",
    clients: [
      "Vertex Financial",
      "Lumina Health",
      "Aether Logistics",
      "Nidus Systems",
      "Prism AI",
    ],
    testimonial: {
      quote:
        "They didn't just write tests. They rebuilt our entire approach to quality and made our team self-sufficient.",
      author: "VP of Engineering",
      role: "B2B SaaS Scaleup",
    },
  },
  howWeWork: [
    {
      stage: "01",
      title: "Understand",
      description:
        "We start by mapping your systems, constraints, and goals. Deep discovery with the people who know your product best.",
    },
    {
      stage: "02",
      title: "Design",
      description:
        "We define the architecture, quality strategy, and delivery approach — practical plans shaped by real engineering experience.",
    },
    {
      stage: "03",
      title: "Build",
      description:
        "Senior engineers embed with your team to implement, automate, and ship. No handoffs to junior teams.",
    },
    {
      stage: "04",
      title: "Improve",
      description:
        "We measure outcomes, refine systems, and transfer knowledge so your team can sustain momentum long after we leave.",
    },
  ],
  whyUs: [
    {
      title: "Senior specialists",
      description:
        "Every engagement is led by experienced engineers who have shipped production systems at scale.",
    },
    {
      title: "Small, focused teams",
      description:
        "We stay deliberately small — no account managers, no bloated delivery layers, just skilled people doing the work.",
    },
    {
      title: "Deep technical expertise",
      description:
        "Quality engineering, AI systems, and modern software development are our core disciplines, not side offerings.",
    },
    {
      title: "Practical solutions",
      description:
        "We favour approaches that work in production over theoretical frameworks and buzzword-driven recommendations.",
    },
    {
      title: "Flexible engagements",
      description:
        "From targeted audits to embedded team augmentation — we adapt to how your organisation actually operates.",
    },
  ],
  principles: [
    {
      title: "Clarity over complexity",
      description:
        "Simple, well-understood systems outperform clever ones. We design for maintainability and clear ownership.",
    },
    {
      title: "Senior people doing the work",
      description:
        "You work directly with the engineers who design and build your solution — no bait-and-switch.",
    },
    {
      title: "Quality is an engineering discipline",
      description:
        "Testing, observability, and reliability are built into the development process, not bolted on at the end.",
    },
    {
      title: "AI systems must be measurable and reliable",
      description:
        "We treat AI like any critical system — with evaluation frameworks, monitoring, and defined success criteria.",
    },
    {
      title: "Technology should solve real business problems",
      description:
        "Every technical decision ties back to outcomes that matter: speed, reliability, cost, and user experience.",
    },
  ],
  about: {
    intro:
      "Runtime Studio is a senior technical consultancy for companies that need more than generic advice. We help teams build software and AI systems they can trust — with the engineering rigour to match their ambition.",
    philosophy:
      "We believe the best consulting looks like great engineering: clear thinking, honest communication, and work that holds up under production load. Our clients come to us when quality, reliability, and technical depth matter.",
    teamNote:
      "We're a small team of senior engineers, QA architects, and AI specialists. Placeholder profiles below — update with your team as you grow.",
  },
  finalCta: {
    headline: "Building something ambitious?",
    description:
      "Tell us about your project. We'll respond within one business day with thoughtful next steps.",
    cta: "Start a project",
  },
} as const;

export const teamPlaceholders = [
  {
    name: "Lead Engineer",
    role: "Quality Engineering & Automation",
    bio: "Placeholder — add team member bio and photo.",
  },
  {
    name: "AI Systems Lead",
    role: "LLM Evaluation & AI Infrastructure",
    bio: "Placeholder — add team member bio and photo.",
  },
  {
    name: "Principal Consultant",
    role: "Software Architecture & Delivery",
    bio: "Placeholder — add team member bio and photo.",
  },
] as const;

export const techExpertise = [
  "TypeScript / Node.js",
  "Python",
  "Playwright & Cypress",
  "CI/CD (GitHub Actions, GitLab)",
  "LLM APIs & evaluation frameworks",
  "Cloud (AWS, GCP, Azure)",
  "Kubernetes & Docker",
  "Observability (Datadog, Grafana)",
] as const;
