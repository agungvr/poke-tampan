const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.defaults',
    }),
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
};
