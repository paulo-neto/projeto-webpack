const path = require('path');

module.exports = {
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,//para considerar todos os arquivos que terminam com a extensão .js
                exclude: /node_modules/,//excluímos a pasta node_modules, pois não faz sentido processar os arquivos dela
                use: {
                    loader: 'babel-loader'//indicamos o loader que será utilizado
                }
            }
        ]
    }
} 