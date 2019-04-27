const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const DEV = process.env.NODE_ENV === 'development';
const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: [
      DEV && 'react-hot-loader/patch',
      DEV && 'webpack/hot/dev-server',
      './src/index.tsx',
    ].filter(Boolean),
  },

  mode: PROD ? 'production' : 'development',

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  devServer: DEV ? {
    host: '0.0.0.0',
    port: '1337',
    disableHostCheck: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
  } : {},

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.d.ts'],
    alias: {
      '@src': path.resolve('./src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader',
        },
        {
          loader: 'awesome-typescript-loader',
        },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=img/[name].[ext]',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(!!DEV),
      __PROD__: JSON.stringify(!!PROD),
    }),
    DEV && new webpack.HotModuleReplacementPlugin(),
    DEV && new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ].filter(Boolean),
};
