import type { NextConfig } from "next";

const buildTime = new Date().toUTCString();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "Last-Modified", value: buildTime },
        ],
      },
      {
        source:
          "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|css|js|woff2|woff|ttf|eot|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "Last-Modified", value: buildTime },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=43200, s-maxage=600, stale-while-revalidate=120",
          },
          { key: "Last-Modified", value: buildTime },
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
    ];
  },
};

export default nextConfig;
