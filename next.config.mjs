/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    reactStrictMode: false,
    images: {
      dangerouslyAllowSVG: true,
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
            hostname: 'api.dicebear.com',
          },
        
        ],
      },



};

export default nextConfig;
