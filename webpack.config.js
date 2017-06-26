var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    talk: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].[hash].js'
  },
  resolve: {
    alias: {
      'headjs': 'headjs/src/2.0.0/load.js'
    }
  },
  module: {
    rules: [
      { test: require.resolve("reveal.js"), loader: "expose-loader?Reveal" },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|jpg|png)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: { glob: './src/content/*.md' }, to: 'content', flatten: true },
      { from: './node_modules/reveal.js/plugin/', to: 'plugin' },
      { from: './node_modules/reveal.js/css/', to: 'css' }
    ])
  ],
  devServer: {
    port: 8081
  }
};