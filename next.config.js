// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
const path = require("path");
const withOffline = require("next-offline");
const caching = require("./utils/caching");

const nextConfig = {
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching: caching,
  },
  transformManifest: (manifest) => ["/"].concat(manifest),
  generateInDevMode: false,
  workboxOpts: {
    swDest: "static/service-worker.js",
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
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js",
      },
    ];
  },
  reactStrictMode: true,
  webpack5: true,
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
module.exports = withOffline(nextConfig);
