// webpack v4
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'script.min.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};