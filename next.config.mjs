/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    modularizeImoports: {
      '@radix-ui': {
        transform: '@radix-ui/{{member}}'
      },

      '../components': {
        transform: '../components/{{member}}'
      },

      '../components/ui': {
        transform: '../components/ui/{{member}}'
      },

      '../lib': {
        transform: '../lib/{{member}}'
      },

      'zod': {
        transform: 'zod/{{member}}'
      }
    }
  },
}

export default nextConfig
