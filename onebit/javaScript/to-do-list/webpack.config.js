const path = require('path')

module.exports = {
    entry: {
        script: './src/script.js',
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
    }
}