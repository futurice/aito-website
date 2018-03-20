// webpack v3
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/script.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'script.min.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, 
        use: 'raw-loader' }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    // new HtmlWebpackPlugin()
  ]
};