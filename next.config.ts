import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
