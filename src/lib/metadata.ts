import type { Metadata, Viewport } from "next";
import { withBasePath } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://runtimestudio.com";
const appVersion = process.env.NEXT_PUBLIC_APP_VERSION ?? "latest";

export const siteConfig = {
  name: "Runtime Studio",
  tagline: "Better software. Smarter systems. Built with confidence.",
  description:
    "Runtime Studio is a senior technology consultancy for quality engineering, AI systems, and modern software delivery. We build software teams can trust in production — measured, deliberate, and precise.",
  url: siteUrl,
  email: "hello@runtimestudio.com",
  linkedin: "https://linkedin.com/company/runtimestudio",
  github: "https://github.com/runtimestudio",
  version: appVersion,
  /**
   * Design language identity — the "Latent Field" system. Surfaced in
   * metadata so the brand's substrate colors travel with link previews
   * and native UI chrome (theme-color, color-scheme).
   */
  design: {
    system: "Latent Field",
    principles: [
      "Computed Light",
      "Adaptive Structure",
      "Emergent Motion",
    ],
    /** OKLCH substrate anchors, expressed as hex for chrome that can't
     *  yet parse oklch() (browser address bars, some crawlers). */
    themeColorLight: "#f4f3f7",
    themeColorDark: "#101014",
  },
} as const;

/**
 * Keyword taxonomy for an AI-native consultancy. Broadened beyond the
 * original QE terms to cover the systems the studio ships and the
 * generative/adaptive design vocabulary of the brand.
 */
const baseKeywords = [
  "quality engineering",
  "AI systems",
  "AI-native software",
  "applied AI",
  "LLM systems",
  "agentic systems",
  "evaluation and observability",
  "software delivery",
  "test automation",
  "platform engineering",
  "engineering studio",
  "generative design",
  "adaptive interfaces",
];

export function createMetadata({
  title,
  description,
  path = "",
  type = "website",
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  const pageTitle = title
    ? `${title} · ${siteConfig.name}`
    : `${siteConfig.name} · ${siteConfig.tagline}`;
  const pageDescription = description ?? siteConfig.description;
  const url = new URL(withBasePath(path), siteConfig.url).toString();

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    keywords: keywords ? [...baseKeywords, ...keywords] : baseKeywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: url,
    },
    other: {
      "design-system": siteConfig.design.system,
      "color-space": "oklch",
    },
  };
}

/**
 * Adaptive viewport — the "Latent Field" renders itself for both light
 * and dark substrates, so native chrome (theme-color) is expressed per
 * color scheme rather than as a single static color.
 */
export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.design.themeColorLight },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.design.themeColorDark },
  ],
};
