const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const sassLoaders = [
    'css-loader',
    'postcss-loader',
    `sass-loader?indentedSyntax=sass&includePaths[]=${ path.resolve(__dirname, './assets/styles') }`,
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
                loader: "style!css!autoprefixer!sass",
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
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

module.exports = config