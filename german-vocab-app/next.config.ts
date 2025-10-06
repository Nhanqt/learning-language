import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // ✅ ensures all needed files are included
};

export default nextConfig;
