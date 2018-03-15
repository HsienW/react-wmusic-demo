const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './app/App.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: "eslint-loader"
            },
            {
                test: /\.(css|sass)?$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                exclude: /node_modules/,
                use: "url-loader?limit=8192"
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css']
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: 'true',
            dry: false
        }),
        new HtmlWebpackPlugin({
            title: 'React W.Music',
            template: './app/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'bundle.css',
        }),
    ],

    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true
    },
};
