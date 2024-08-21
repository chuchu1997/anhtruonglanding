/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tuikhibiendong.com',
          
          },
        ],
      },



};

export default nextConfig;
