const {
    CheckerPlugin,
} = require('awesome-typescript-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');



module.exports = {
    entry: './src/index.ts',

    devtool: 'source-map',

    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            jquery: "jquery/src/jquery",
            lodash: "lodash/lodash"
        }
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        }),
        new ExtractTextPlugin('style.css')
    ]
};