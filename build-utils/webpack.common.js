const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

const uglifyjs = new UglifyJsPlugin({
  cache: false,
  parallel: true,
  sourceMap: false,
  uglifyOptions: {
    output: {
      comments: false,
    },
  },
});

const optimizeCssPlugin = new OptimizeCSSAssetsPlugin({});

module.exports = {
  optimization: {
    minimizer: [uglifyjs, optimizeCssPlugin],
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/image/[ext]/[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/image/svg/[name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader?prefix=fonts/',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      '@tampan/img': path.join(__dirname, '../src/assets/images'),
      '@tampan/graph-query': path.join(
        __dirname,
        '../src/graph-query'
      ),
      '@tampan/hoc': path.join(__dirname, '../src/hoc'),
      '@tampan/hooks': path.join(__dirname, '../src/hooks'),
      '@tampan/pages': path.join(__dirname, '../src/pages'),
      '@tampan/utils': path.join(__dirname, '../src/utils'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Poke Tampan',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'initial', // or 'initial', or 'allAssets'
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'js/bundle.js',
    chunkFilename: `js/[name].[hash].js`,
  },
};
