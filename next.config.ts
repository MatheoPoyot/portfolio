import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, served by Nginx on the VPS: no Node process in production.
  output: "export",
  // /projets/kaboom/index.html : servi tel quel par Nginx, sans règle try_files spéciale.
  trailingSlash: true,
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
