var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    talk: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "docs"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|jpg|png)$/,
        type: "asset",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/content/*.md",
          to: "content/[name][ext]",
        },
      ],
    }),
  ],
  devServer: {
    port: 8081,
  },
};
