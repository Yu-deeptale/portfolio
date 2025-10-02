import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',      // 静的HTMLを書き出す
  basePath: '/portfolio', // ←リポジトリ名（例: portfolio）
  images: {
  unoptimized: true,   // GitHub PagesではNextの画像最適化が使えないので必須
  },
};

export default nextConfig;
