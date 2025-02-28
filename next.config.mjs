/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Only enabling type checking during CI/builds to keep local development fast
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  eslint: {
    // Only run ESLint in CI/builds to keep local development fast
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;