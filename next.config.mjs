/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    reactStrictMode: true,
    basePath:"/",
    images: {
      path: "/",
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tuikhibiendong.com',
          
          },
        ],
      },



};

export default nextConfig;
