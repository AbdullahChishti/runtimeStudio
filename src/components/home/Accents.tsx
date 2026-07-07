/** Muted accent palette for home page sections */
export const accents = {
  teal: "#0d9488",
  violet: "#7c3aed",
  amber: "#d97706",
  indigo: "#4f46e5",
  coral: "#e07a5f",
} as const;

export type AccentKey = keyof typeof accents;

export const serviceAccentBySlug: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  "quality-engineering": {
    color: accents.teal,
    bg: "rgba(13, 148, 136, 0.08)",
    border: "rgba(13, 148, 136, 0.35)",
  },
  "ai-services": {
    color: accents.violet,
    bg: "rgba(124, 58, 237, 0.08)",
    border: "rgba(124, 58, 237, 0.35)",
  },
  "software-engineering": {
    color: accents.amber,
    bg: "rgba(217, 119, 6, 0.08)",
    border: "rgba(217, 119, 6, 0.35)",
  },
  "technology-consulting": {
    color: accents.indigo,
    bg: "rgba(79, 70, 229, 0.08)",
    border: "rgba(79, 70, 229, 0.35)",
  },
};

export const trustClientAccents: Record<string, AccentKey> = {
  "Vertex Financial": "indigo",
  "Lumina Health": "teal",
  "Aether Logistics": "amber",
  "Nidus Systems": "coral",
  "Prism AI": "violet",
};

export const stepAccentColors = [
  accents.indigo,
  accents.teal,
  accents.violet,
  accents.coral,
] as const;

export const whyUsMarkerColors = [
  accents.teal,
  accents.indigo,
  accents.violet,
  accents.amber,
  accents.coral,
] as const;

export const categoryAccentColors: Record<string, string> = {
  "Quality Engineering": accents.teal,
  "AI Systems": accents.violet,
  "Software Engineering": accents.amber,
};

export const caseStudyAccentBySlug: Record<string, string> = {
  "ai-testing-platform": accents.violet,
  "qa-automation-transformation": accents.teal,
  "ai-knowledge-platform": accents.indigo,
};
