import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    // 90 = the screenshots in public/screens; 75 = everything else.
    qualities: [75, 90],
  },
  experimental: {
    // Two root layouts (ru at /, en at /en) leave no single layout for a 404 page.
    globalNotFound: true,
  },
  async rewrites() {
    // Browsers and crawlers ask for /favicon.ico directly.
    return [{ source: "/favicon.ico", destination: "/icon.png" }];
  },
};

export default nextConfig;
