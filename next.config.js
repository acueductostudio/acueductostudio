// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
const path = require("path");
const withOffline = require("next-offline");

const nextConfig = {
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? "service-worker.js"
      : "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/en/contact",
        destination: "/en/contacto",
        locale:false, 
      },
      {
        source: "/en/work",
        destination: "/en/portafolio",
        locale:false,
      },
      {
        source: "/en/work/:slug",
        destination: "/en/portafolio/:slug",
        locale:false, 
      },
      {
        source: "/en/nosotros",
        destination: "/en/about",
      },
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js",
      },
    ];
  },
  trailingSlash: false,
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
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: false,
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = withOffline(nextConfig);
