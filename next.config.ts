
const nextConfig = {
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
        pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/**`,
      },
    ],
  },
};


export default nextConfig;                                                                                                                                                                              