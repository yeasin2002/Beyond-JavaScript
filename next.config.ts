import { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  experimental: {
    typedRoutes: true,
    mdxRs: true
  },

  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'skillicons.dev' },
      { protocol: 'https' as const, hostname: 'avatars.githubusercontent.com' }
    ]
  },

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
} satisfies NextConfig;

export default withContentlayer(nextConfig);
