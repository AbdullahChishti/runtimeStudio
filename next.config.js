/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/runtimeStudio',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/runtimeStudio',
  },
  transpilePackages: ["geist"],
};

module.exports = nextConfig;
