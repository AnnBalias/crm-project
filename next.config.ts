// next.config.ts
const nextConfig: import('next').NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;
