const webpack = require('webpack');
const path = require('path');

// plugins
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// variables
const PROD = process.env.NODE_ENV === 'production';
const DEV = !PROD;
const ANALYZE_BUNDLES = process.env.ANALYZE_BUNDLES === 'true';

console.log('building boxshadows.com');
console.table({ PROD, DEV, ANALYZE_BUNDLES });

const config = {
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
      '@common': path.resolve('./src/common'),
      '@views ': path.resolve('./src/views'),

      "react": "preact/compat",
      "react-dom": "preact/compat",
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|svg)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=img/[name].[ext]',
      },
      {
        test: /\.inline.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(!!DEV),
      __PROD__: JSON.stringify(!!PROD),
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    !ANALYZE_BUNDLES &&
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.svg',
      favicons: {
        appName: 'boxshadows.com',
        lang: 'en-US',
        theme_color: '#03DFD8',
        orientation: 'landscape',
        icons: {
          favicons: true, // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
        },
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: './sitemap.txt', to: 'static' },
      ],
    }),
    ANALYZE_BUNDLES && new BundleAnalyzerPlugin(),
    new CaseSensitivePathsPlugin(),
  ].filter(Boolean),

  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 7335,
    contentBase: './dist',
    historyApiFallback: true,
  },
};

if (PROD) {
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 1,
        }
      }
    },
    minimize: PROD,
    minimizer: [new TerserPlugin()],
  };
}

module.exports = config;
