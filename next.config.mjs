/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    output:"export",
    reactStrictMode: true,
    images: {
      // path: "/",
      //EDIT PATH /
       unoptimized: true,
       formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tuikhibiendong.com',
          
          },
        ],
      },



};

export default nextConfig;
