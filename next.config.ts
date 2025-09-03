import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
   images: {
    unoptimized: true, // wichtig, da Next/Image sonst Probleme macht
  },
};

export default nextConfig;
