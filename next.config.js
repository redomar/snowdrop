require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
module.exports = withMDX({
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
});
