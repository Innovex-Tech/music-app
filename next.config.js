/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.genius.com',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
