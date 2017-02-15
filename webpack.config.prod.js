const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DedupePlugin = require("webpack/lib/optimize/DedupePlugin");
const UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  // devtool: 'eval-source-map',
  entry: __dirname + "/app/index",
  output: {
    path: __dirname + "/build/js",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: './node_modules/',
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        exclude: './node_modules/',
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: "css-loader!postcss-loader!sass-loader"
        })
      },
    ]
  },

  plugins: [
      new ExtractTextPlugin({
       filename: '../css/main.css',
       allChunks: true
      }),

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),

      new UglifyJsPlugin({
        include: /\.js$/,
        minimize: true,
        output: { comments: false },
        compress: {
          warnings: false
        }
      }),

      new CopyWebpackPlugin([
        {
          from: __dirname + '/static/index.html',
          to: __dirname + '/build/index.html'
        },
        {
          from: __dirname + '/static/images',
          to: __dirname + '/build/images'
        }
      ])
  ],

  resolve: {
    extensions: ['.css', '.js', '.scss'],
    modules: [
      path.join(__dirname, './app/'),
      'node_modules'
    ]
  },

  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true,
    inline: true
  },
}

module.exports = config;