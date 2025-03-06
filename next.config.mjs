/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack(config) {
    return config;
  },
};

export default nextConfig;
