const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

exports.createDevConfig = ({ host, port } = {}) => ({
  devtool: 'source-map',
  devServer: {
    // wull available in LAN
    host,
    // port on host where application runs
    port,
    // browser will open at localhost
    public: `localhost:${port}`,
    // allow gzip compressing
    compress: true,
    // allow to take files from public folder
    contentBase: path.join(__dirname, '../public'),
    // watch for files at public folder
    watchContentBase: true,
    // open info about arror at browser when error
    overlay: {
      errors: true,
    },
    stats: 'minimal',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]--[hash:base64:4]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new ErrorOverlayPlugin(),
    // will cause the relative path of the module to be displayed when HMR is enabled.
    // new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://${host}:${port}`],
      },
      clearConsole: true,
    }),
    // clear terminal after every rebuild
    // new CleanTerminalPlugin({
    //   message: `dev server is running at http://${host}:${port}`,
    // }),
  ],
});
