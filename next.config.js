const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
module.exports = withMDX({
 typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }, pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
