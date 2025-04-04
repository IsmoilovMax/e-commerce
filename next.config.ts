import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '',
        search: ''
      }
    ]
  },
  // experimental: {
  //   dynamicIO: true
  // }
};

export default nextConfig;
