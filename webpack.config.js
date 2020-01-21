const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/public/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s*[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|ttf|svg)?$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            favicon: './src/public/favicon.ico',
        }),
    ],
};
