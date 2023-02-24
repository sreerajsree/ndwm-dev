const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thefashionenthusiast.uk',
        port: '',
        pathname: '',
      },
    ],
  },
  experimental: {
    //largePageDataBytes: 128 * 1000, // 128KB by default
      largePageDataBytes: 128 * 100000,
    },
})