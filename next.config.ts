import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.autofrogy.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    // PERFORMANCE WARNING: unoptimized:true hurts SEO & Core Web Vitals
    // Images are NOT resized/optimized, causing slower loads & poor mobile performance
    // RECOMMENDED: Enable optimization (set to false) if your cPanel/host supports it
    // OR manually optimize images before upload (use tools like TinyPNG, Squoosh)
    // OR consider switching to Vercel/Netlify which support automatic optimization
    unoptimized: true,
    minimumCacheTTL: 60,
    formats: ["image/webp"], // Prefer WebP format when optimization is enabled
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.BASE_URL,
    NEXT_PUBLIC_API_HASH: process.env.API_HASH,
  },
  poweredByHeader: false, // Reduces response header size
  reactStrictMode: false, // Reduces development overhead
  generateEtags: true, // Improves caching
  compress: true, // Enable gzip compression
  staticPageGenerationTimeout: 180, // Increase timeout for static generation
  async redirects() {
    return [
      // Redirect old /en URLs to their equivalent pages
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
      // Redirect non-www to www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "autofrogy.com",
          },
        ],
        destination: "https://www.autofrogy.com/:path*",
        permanent: true,
      },
      // Remove trailing slashes for consistency
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
