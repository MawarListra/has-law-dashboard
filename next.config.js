const { version } = require("./package.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
  images: {
    domains: ["has.chicodeapi.xyz"],
  },
};

module.exports = nextConfig;
