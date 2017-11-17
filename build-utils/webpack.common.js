const path = require('path');
const commonPaths = require('./common-paths')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: commonPaths.appEntry,
    output: {
      filename: "bundle.js",
      path: commonPaths.outputPath
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin([commonPaths.outputPath], { root: path.resolve(__dirname , '..')})
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test:/\.(html|css)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: commonPaths.outputPath
    }
};

module.exports = config;