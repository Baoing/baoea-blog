/** @type {import('next').NextConfig} */
const rewrites = () => {
    return [
      {
        source: "/plateno_mall",
        destination: "https://malls.bestwehotel.com/plateno_mall",
      },
    ];
  };
  
const nextConfig = {
    rewrites,
    eslint: {
      ignoreDuringBuilds: true, // 忽略 eslint 检查
    },
    typescript: {
      ignoreBuildErrors: true, // 忽略 TypeScript 检查
    }
};

export default nextConfig;
