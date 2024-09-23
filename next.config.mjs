/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["picsum.photos", "images.unsplash.com", "plus.unsplash.com"],
  },
};

export default nextConfig;
