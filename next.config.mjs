/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    reactStrictMode: true,
    basePath:"/",
    env: {
      customKey: 'my-value',
    },
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
