/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // domain: images.unsplash.com
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
