const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createCommonConfig = () => ({
  plugins: [
    new HtmlWebPackPlugin({
      title: 'React app',
      template: './src/public/index.html',
      filename: './index.html',
    }),
    // to create separate css file for every js where css is
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            quiet: true,
            emitWarning: true, // in browser erros will like warnings
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

exports.createCommonConfig = createCommonConfig;
