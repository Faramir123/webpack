const {resolve} = require ('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: resolve(__dirname, "src", "index.html"),
    mode: 'development',
    output: {
        path: resolve(__dirname, "dist"),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
           { 
               test: /\.s[ac]ss$/i,
               use: [
                MiniCssExtractPlugin,
                   "css-loader",
                   "sass-loader"
               ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "img-optimize-loader",
                        options: {
                            compress: {
                                mode: 'hight',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false
                            }
                        }
                    }
                ]
              
            },
            {
                test: /\.(mp[3][4])$/i,
                use: [
                   "file-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "src", "index.html"),
            /* filename: 'index.html' */
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
          }),
    ]
}