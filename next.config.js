const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const path = require("path");

const nextConfig = {
  exportTrailingSlash: false,
  webpack: (config, options) => {
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
};

module.exports = withBundleAnalyzer(nextConfig);
