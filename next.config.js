// next.config.js

  module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack: (config, options) => {
  
        // access to webpack config here
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          });
  
        return config;
      },
    });
  };