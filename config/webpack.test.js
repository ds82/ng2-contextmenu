var webpackMerge = require('webpack-merge');
var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      }
    ]
  }
});
