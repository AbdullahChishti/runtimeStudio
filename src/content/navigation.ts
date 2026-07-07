export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Quality Engineering", href: "/services/quality-engineering" },
    { label: "AI Services", href: "/services/ai-services" },
    { label: "Software Engineering", href: "/services/software-engineering" },
    {
      label: "Technology Consulting",
      href: "/services/technology-consulting",
    },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
