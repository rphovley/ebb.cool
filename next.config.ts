import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aehiyih706.ufs.sh',
        port: '', 
        pathname: '/f/**',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
