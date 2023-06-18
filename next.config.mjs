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
      },

      '@hookform/resolvers': {
        transform: '@hookform/resolvers/{{member}}'
      },

      '@hookform' : {
        transform: '@hookform/{{member}}'
      }
    }
  },
}

export default nextConfig
