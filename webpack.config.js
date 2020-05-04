const webpack = require('webpack');
const path = require('path');

// plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// variables
const PROD = process.env.NODE_ENV === 'production';
const DEV = !PROD;

module.exports = {
  entry: {
    app: './src/index.tsx',
  },

  mode: PROD ? 'production' : 'development',

  output: {
    filename: DEV ? 'js/[name].bundle.js' : 'js/[name].[contenthash:6].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.d.ts'],
    alias: {
      '@src': path.resolve('./src'),
      '@styles': path.resolve('./src/styles'),
      '@components': path.resolve('./src/components'),
      '@contexts': path.resolve('./src/contexts'),
      '@assets': path.resolve('./src/assets'),
      '@utils': path.resolve('./src/utils'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader','awesome-typescript-loader' ],
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
    PROD && new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    process.env.ANALYZE_BUNDLES !== 'true' && new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.svg',
      favicons: {
        appName: 'boxshadows.com',
        lang: 'en-US',
        theme_color: '#03DFD8',
        orientation: 'landscape',
        icons: {
          favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          firefox: true,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          windows: true,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
        },
      }
    }),
    process.env.ANALYZE_BUNDLES === 'true' && new BundleAnalyzerPlugin(),
  ].filter(Boolean),

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
  },
  devServer: {
    compress: true,
    port: 7335,
    contentBase: './dist',
  },
};
