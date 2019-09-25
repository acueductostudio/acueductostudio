const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const path = require("path");

module.exports = withBundleAnalyzer({
  webpack(config, options) {
    // access to webpack config here
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false
          }
        }
      ]
    });
    config.resolve.modules.push(path.resolve("./"));

    return config;
  }
});
