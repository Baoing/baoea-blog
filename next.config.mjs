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
    rewrites
};

export default nextConfig;
