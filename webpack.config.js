const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const sassLoaders = [
  'style-loader',
  'css-loader',
  'postcss-loader',
  'sass-loader'
];

const config = {
  // devtool: 'eval-source-map',
  entry: __dirname + "/app/main/index",
  output: {
    path: __dirname + "/static/js",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: './node_modules/',
        use: [
          { loader: 'jshint-loader' },
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        exclude: './node_modules/',
        use: sassLoaders
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
     filename: '/css/main.css'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),

    new Dotenv({
      path: './.env',
    })
  ],

  resolve: {
    extensions: ['.css', '.js', '.scss'],
    modules: [
      path.join(__dirname, './app/'),
      'node_modules'
    ]
  },

  devServer: {
    contentBase: './static',
    historyApiFallback: true,
    inline: true,
    port: '1600'
  },
}

module.exports = config;
