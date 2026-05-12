import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
