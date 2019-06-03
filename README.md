# NodeJs-Initial
Node Js Template Project

## webpack.config.js
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

## package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "Node js application",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "concurrently \"webpack\" \"webpack-dev-server --mode development --open\" "
  },
  "author": "rajen.shrestha",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.4.4",
    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "babel-loader": "^8.0.6",
    "concurrently": "^4.1.0",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.32.2",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.5.1"
  },
  "dependencies": {
    "@babel/polyfill": "^7.4.4"
  }
}

