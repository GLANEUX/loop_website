// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1) Ne plus bloquer le build sur ESLint/TS errors si tu veux
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2) Active le mode standalone
  output: "standalone",

  // …tes autres options ici…
};

export default nextConfig;
