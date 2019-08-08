module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack: (config, options) => {
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
};

//addClassesToSVGElement: true

// Este funciona bien para imágenes, dice Josh que no es necesario, y es verdad

// const withImages = require("next-images");
// module.exports = withImages({
//   webpack(config, options) {
//     config.module.rules
//       .push
//       // {
//       //   test: /\.svg$/,
//       //   use: ['@svgr/webpack'],
//       // }
//       ();
//     return config;
//   }
// });
