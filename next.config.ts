/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  
  // 1. Limit CPU and workers to stop the SIGKILL memory spike
  experimental: {
    cpus: 1,
    workerThreads: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "study.northbridgec.ca",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // 2. Safe fallback if the env variable isn't loaded yet
        pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "**"}/**`,
      },
    ],
  },
};

export default nextConfig;