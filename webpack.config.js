const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const DedupePlugin = require("webpack/lib/optimize/DedupePlugin");
const webpack = require('webpack');

const sassLoaders = [
  'style-loader',
  'css-loader',
  'postcss-loader',
  'sass-loader'
];

const config = {
  // devtool: 'eval-source-map',
  entry: __dirname + "/app/index",
  output: {
    path: __dirname + "/static/js",
    filename: "bundle.js"
  },

  module: {
    preLoaders: [
      { test: /\.js$/, exclude: './node_modules/', loader: 'jshint-loader' }
    ],

    loaders: [{
      test: /\.jsx?$/,
      exclude: './node_modules/',
      loader: 'babel',
      },

      {
        test: /\.scss$/,
        exclude: './node_modules/',
        loader: sassLoaders.join('!'),
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
    new ExtractTextPlugin('/css/main.css'),
    new DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],

  resolve: {
    extensions: ['', '.css', '.js', '.scss'],
    root: [path.join(__dirname, './app/')]
  },

  devServer: {
    contentBase: './static',
    colors: true,
    historyApiFallback: true,
    inline: true
  },
}

module.exports = config;