const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
        port: '',
        pathname: '/pbxt/**'
      },
    ],
  },
};

module.exports = nextConfig