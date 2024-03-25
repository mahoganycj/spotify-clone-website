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
      {
        protocol:"https",
        hostname:"i2o.scdn.co",
      },
      {
        protocol:"https",
        hostname:"image-cdn-ak.spotifycdn.com"
      },{
        protocol:"https",
        hostname:"scontent.fmnl25-4.fna.fbcdn.net"
      },{
        protocol:"https",
        hostname:"scontent.fmnl25-5.fna.fbcdn.net"
      }
    ],
  },
};

export default nextConfig;
