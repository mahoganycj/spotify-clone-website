/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains is deprecated
    // domains: [
    //   "i.scdn.co",
    //   "seed-mix-image.spotifycdn.com",
    //   "dailymix-images.scdn.co",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "seed-mix-image.spotifycdn.com",
      },
      {
        protocol: "https",
        hostname: "dailymix-images.scdn.co",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
