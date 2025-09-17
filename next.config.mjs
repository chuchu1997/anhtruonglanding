/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    reactStrictMode: true,
    eslint: {
    ignoreDuringBuilds: true, // 🚀 build không check ESLint
    },
    images: {
      // path: "/",
      //EDIT PATH /
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
