// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
const path = require("path");
const withPWA = require("next-pwa");
const caching = require("./utils/caching");

const nextConfig = {
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching: caching,
  },
  async rewrites() {
    return [
      {
        source: "/contact",
        destination: "/contacto",
      },
      {
        source: "/work",
        destination: "/portafolio",
      },
      {
        source: "/work/:slug",
        destination: "/portafolio/:slug",
      },
      {
        source: "/privacy",
        destination: "/privacidad",
      },
      {
        source: "/about",
        destination: "/nosotros",
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });
    config.resolve.alias["three$"] = path.resolve("./utils/three-exports.js");
    return config;
  },
  //env config
  env: {
    SENDINBLUE_API: process.env.SENDINBLUE_API,
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    localeDetection: false,
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
// module.exports = withPWA(nextConfig);
module.exports = nextConfig;
