import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'skillicons.dev' },
      { protocol: 'https' as const, hostname: 'avatars.githubusercontent.com' }
    ]
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
