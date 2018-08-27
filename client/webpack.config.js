const merge = require('webpack-merge');

const { createCommonConfig } = require('./webpackParts/commonConfig');
const { createDevConfig } = require('./webpackParts/createDevConfig');
const { createProdConfig } = require('./webpackParts/createProdConfig');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const commonConfig = merge([createCommonConfig()]);

const prodConfig = merge([createProdConfig()]);

const devConfig = merge([
  createDevConfig({
    // Customize host/port here if needed
    host: HOST,
    port: PORT,
  }),
]);

module.exports = (mode) => {
  let config;
  if (mode === 'production') {
    config = merge(commonConfig, prodConfig, { mode });
  } else {
    config = merge(commonConfig, devConfig, { mode });
  }

  return config;
};
