import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 year cache
          },
        ],
      },
      {
        source:
          "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|css|js|woff2|woff|ttf|eot|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 year cache
          },
        ],
      },
    ];
  },
};

export default nextConfig;
