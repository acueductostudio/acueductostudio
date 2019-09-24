const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
  // exportPathMap: function() {
  //   return {
  //     "/": { page: "/" },
  //     "/en/manifesto": { page: "/en/manifesto" }
  //   };
  // },
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

    return config;
  }
});
