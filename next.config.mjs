/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      optimizePackageImports: ['lucide-react'],
    },
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: '**' },
      ],
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
    typescript: {
      ignoreBuildErrors: false,
    },
  };
  
  export default nextConfig;
  