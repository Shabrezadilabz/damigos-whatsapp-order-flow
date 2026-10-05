import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: "/architecture", destination: "/", permanent: true },
      { source: "/contact", destination: "/waitlist", permanent: true },
    ];
  },
};

export default nextConfig;
