const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const copyPlugin = new CopyWebpackPlugin([{ from: 'public' }]);

const swWorkboxPlugin = new GenerateSW({
  swDest: 'sw.js',
  clientsClaim: true,
  skipWaiting: true,
});

const withPlugins = () => {
  const plugins = [
    new Dotenv({
      path: './.env.defaults',
    }),
    copyPlugin,
  ];
  if (process.env.TARGET_ENV !== 'dev') {
    plugins.push(swWorkboxPlugin);
  }
  return plugins;
};

module.exports = {
  mode: 'production',
  plugins: withPlugins(),
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
  },
};
