const path = require('path')
const { devServer } = require('../alguns-comandos/webpack/webpack.config')
module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080
    },
    entry: {
        index: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js/,
            use: ['babel-loader']
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    }
}