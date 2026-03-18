import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons", "lucide-react"],
  },
};

export default nextConfig;
