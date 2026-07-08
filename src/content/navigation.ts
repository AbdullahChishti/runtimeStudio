export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export const footerNav = {
  services: [
    { label: "Quality Engineering", href: "/services/quality-engineering" },
    { label: "AI Services", href: "/services/ai-services" },
    { label: "Software Engineering", href: "/services/software-engineering" },
    { label: "Technology Consulting", href: "/services/technology-consulting" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
