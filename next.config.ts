import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
//TODO: для работы с картинками нужно вставить:
module.exports = {
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

export default nextConfig;
