export type PackageAccent = "teal" | "violet" | "amber";

export type PackageTier = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  idealFor: string;
  cta: string;
  accent: PackageAccent;
};

export const packagesContent = {
  label: "Service packages",
  title: "Three ways to work with us",
  description:
    "Choose the engagement that fits your stage. Each package is scoped, outcome-focused, and built to deliver value without unnecessary overhead.",
};

export const packages: PackageTier[] = [
  {
    slug: "foundation",
    number: "01",
    name: "Foundation",
    tagline: "A polished static presence plus core technical services.",
    description:
      "A complete, deployed static website plus scoped QA, AI, or engineering support as needed. Designed for teams that need credibility fast without ongoing overhead.",
    features: [
      "Custom static website designed, built, and deployed",
      "QA, AI, or engineering support scoped to your needs",
      "Clear handover and documentation",
      "One-time delivery with defined outcomes",
    ],
    idealFor:
      "Startups and early-stage teams launching their first credible web presence.",
    cta: "Start with Foundation",
    accent: "teal",
  },
  {
    slug: "managed",
    number: "02",
    name: "Managed",
    tagline: "A live website that stays current and healthy.",
    description:
      "A custom website plus ongoing maintenance, updates, and technical support. We keep the site secure, fast, and aligned with your evolving message.",
    features: [
      "Custom website design and build",
      "Ongoing maintenance and security updates",
      "Content updates and performance monitoring",
      "Technical support and priority bug fixes",
    ],
    idealFor:
      "Growing teams who need a reliable site without managing it themselves.",
    cta: "Choose Managed",
    accent: "violet",
  },
  {
    slug: "partnership",
    number: "03",
    name: "Partnership",
    tagline: "Full build, extended support, and built-in booking.",
    description:
      "A complete website launch plus six months of iterative improvements and maintenance. Includes appointment or scheduling integration so clients can book directly.",
    features: [
      "Full website creation and launch",
      "Six months of maintenance and iterative improvements",
      "Appointment and scheduling integration",
      "Direct booking flow for clients and leads",
    ],
    idealFor:
      "Businesses ready to convert visitors into booked conversations.",
    cta: "Build a Partnership",
    accent: "amber",
  },
];
