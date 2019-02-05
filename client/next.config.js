/* eslint-disable no-param-reassign */

module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    if (dev) {
      config.module.rules.push({
        test: /\.(jsx?|gql|graphql)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/'],
        enforce: 'pre',
        options: {
          quiet: true,
          emitWarning: true // in browser erros will like warnings
        }
      });
    }
    return config;
  }
};
