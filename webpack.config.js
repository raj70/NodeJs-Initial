const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'node',
    node: {
        crypto: true,
        stream: true,
        fs: 'empty',
        net: 'empty'
    },
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 3300
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
};