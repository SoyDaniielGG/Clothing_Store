/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  experimental: {
    serverActions: true,
  },
  useFileSystemPublicRoutes: true,
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
};

module.exports = nextConfig; 