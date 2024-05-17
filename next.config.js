const { version } = require("./package.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
  images: {
    domains: ["has.chicodeapi.xyz", "api.has-law.com"],
  },
};

module.exports = nextConfig;
