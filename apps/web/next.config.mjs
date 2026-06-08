/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "react-native$": "react-native-web"
    };
    return config;
  },
  transpilePackages: [
    "@skillseta/ui",
    "@skillseta/types",
    "@skillseta/utils",
    "@skillseta/api-client",
    "@skillseta/ai-sdk"
  ]
};

export default nextConfig;
