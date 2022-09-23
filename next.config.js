// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
const path = require("path");

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
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
      {
        source:
          "/podcast/como-es-el-mundo-del-venture-capital-en-latinoamerica",
        destination:
          "/podcast/guia-inicial-al-venture-capital-en-latinoamerica",
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
module.exports = nextConfig;
