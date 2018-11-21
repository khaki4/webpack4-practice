const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    a: "./src/a.js",
    b: "./src/b.js"
  },
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: __dirname + "/dist"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        utilities: {
          test: /[\\/]src[\\/]utilities[\\/]/,
          minSize: 0
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};