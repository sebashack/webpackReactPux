const path = require('path');
const webpack = require('webpack');


// -- Loaders
const purescriptLoader = {
  test: /\.purs$/,
  loader: 'purs-loader',
  exclude: /node_modules/,
  query: {
    psc: 'psa',
    pscArgs: {
      sourceMaps: false
    }
  }
};

const sourceMapLoader = {
  test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules|bower_components/
};

// -- Config
const config = {
  entry: [ path.join(__dirname, './index.js') ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [purescriptLoader,
	      sourceMapLoader
	     ]
  }
};


module.exports = config;
