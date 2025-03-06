/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack(config) {
    return config;
  },
};

export default nextConfig;
