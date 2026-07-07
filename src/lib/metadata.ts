import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://runtimestudio.com";

function withBasePath(path: string) {
  if (!path || path === "/") {
    return basePath || "/";
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export const siteConfig = {
  name: "Runtime Studio",
  tagline: "Systems engineered for confidence.",
  description:
    "A senior engineering studio for quality engineering, AI systems, and modern software delivery. We build software teams can trust in production — measured, deliberate, and precise.",
  url: siteUrl,
  email: "hello@runtimestudio.com",
  linkedin: "https://linkedin.com/company/runtimestudio",
  github: "https://github.com/runtimestudio",
};

export function createMetadata({
  title,
  description,
  path = "",
  type = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
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
  };
}
