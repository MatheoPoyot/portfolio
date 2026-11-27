import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, served by Nginx on the VPS: no Node process in production.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
