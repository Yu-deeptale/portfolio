import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',      // 静的HTMLを書き出す
  trailingSlash: true,   // Netlify用の設定
  images: {
    unoptimized: true,   // 静的エクスポートでは画像最適化が使えないので必須
  },
};

export default nextConfig;
