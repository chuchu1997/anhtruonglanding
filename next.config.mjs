/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    reactStrictMode: true,
    images: {
      // path: "/",
      //EDIT PATH /
       formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tuikhibiendong.com',
          },
          {
            protocol: 'https',
            hostname: 'mayxaydungmoi.com',
          },
        ],
      },



};

export default nextConfig;
