module.exports = {
    images: {
      domains: ['d1vkuao1gkuwze.cloudfront.net'],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        },
      ];
    },
  };