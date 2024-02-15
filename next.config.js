/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "media.graphassets.com",
      "cdn.sanity.io",
      "dummyimage.com",
    ],
  },
};

module.exports = nextConfig
