/** Muted accent palette for home page sections */
export const accents = {
  teal: "var(--accent-teal)",
  violet: "var(--accent-violet)",
  amber: "var(--accent-amber)",
  indigo: "var(--accent-indigo)",
  coral: "var(--accent-coral)",
} as const;

export type AccentKey = keyof typeof accents;

export const serviceAccentBySlug: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  "quality-engineering": {
    color: accents.teal,
    bg: "var(--accent-teal-subtle)",
    border: "var(--accent-teal-border)",
  },
  "ai-services": {
    color: accents.violet,
    bg: "var(--accent-violet-subtle)",
    border: "var(--accent-violet-border)",
  },
  "software-engineering": {
    color: accents.amber,
    bg: "var(--accent-amber-subtle)",
    border: "var(--accent-amber-border)",
  },
  "technology-consulting": {
    color: accents.indigo,
    bg: "var(--accent-indigo-subtle)",
    border: "var(--accent-indigo-border)",
  },
};

export const trustClientAccents: Record<string, AccentKey> = {
  "Placeholder Client A": "indigo",
  "Placeholder Client B": "teal",
  "Placeholder Client C": "amber",
  "Placeholder Client D": "coral",
  "Placeholder Client E": "violet",
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
