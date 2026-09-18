import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "object-src 'none'",
  "frame-src https://www.google.com https://maps.google.com https://www.google.co.in",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control",   value: "on"                                },
  { key: "X-Content-Type-Options",   value: "nosniff"                           },
  { key: "X-Frame-Options",          value: "DENY"                              },
  { key: "X-XSS-Protection",         value: "1; mode=block"                     },
  { key: "Referrer-Policy",          value: "strict-origin-when-cross-origin"   },
  { key: "Permissions-Policy",       value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Content-Security-Policy",  value: csp                                 },
  ...(isProd
    ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]
    : []),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  poweredByHeader: false,            // hide X-Powered-By: Next.js
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
