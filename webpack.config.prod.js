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
    loaders: [{
        test: /\.jsx?$/,
        exclude: './node_modules/',
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        exclude: './node_modules/',
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader"),
      },
      {
        test: /\.json$/,
        exclude: '/node_modules/',
        loader: "json"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  plugins: [
      new ExtractTextPlugin('../css/main.css'),
      new DedupePlugin(),
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
      extensions: ['', '.css', '.js', '.scss'],
      root: [path.join(__dirname, './app/')]
  },

  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true,
    inline: true
  },
}

module.exports = config;