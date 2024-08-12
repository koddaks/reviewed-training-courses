/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://otzovik.azurewebsites.net/api/v1/:path*', // Прокси на API сервер
          },
        ];
      },
};

export default nextConfig;
