const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/app',
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './public')
    }
}