// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. On dit à Next.js d’ignorer les erreurs ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 2. Si vous voulez aussi ignorer les erreurs TypeScript pendant le build
  typescript: {
    ignoreBuildErrors: true,
  },

  // (le reste de votre config ici…)
};

export default nextConfig;
