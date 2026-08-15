import type { NextConfig } from "next";

const isCpanelBuild = process.env.CPANEL_BUILD === "1";

const nextConfig: NextConfig = {
  // Used only when running `npm run build:cpanel`.
  // Default `npm run build` stays a normal Next.js server build.
  ...(isCpanelBuild
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
