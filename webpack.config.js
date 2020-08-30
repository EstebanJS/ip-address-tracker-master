const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'imagenes'
                    }
                }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "IP Address Tracker",
            template: "public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new FaviconsWebpackPlugin('src/images/favicon-32x32.png')
    ]
}