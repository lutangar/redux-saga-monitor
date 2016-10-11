'use strict';

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    library: 'redux-saga-monitor',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  }
};
