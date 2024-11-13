/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    reactStrictMode: false,
    images: {
      domains: ['localhost'],
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
          {
            protocol: 'https',
            hostname: 'nhathuymachine.com.vn',
          },
          {
            protocol:'http',
            hostname:'localhost:5000'
          }
        ],
      },



};

export default nextConfig;
