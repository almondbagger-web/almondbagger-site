import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.tv-tokyo.co.jp" },
      { protocol: "https", hostname: "**.fujitv.co.jp" },
      { protocol: "https", hostname: "**.ntv.co.jp" },
      { protocol: "https", hostname: "**.tv-asahi.co.jp" },
      { protocol: "https", hostname: "**.tokai-tv.com" },
      { protocol: "https", hostname: "**.magi-boys.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "storage.googleapis.com" },
    ],
  },
};

export default nextConfig;
