const {resolve} = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyxerPlugin = require ('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: './dateDiff/js/index.js',
    mode: 'development',
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
       rules: [
           {
            test: /\.(png|jpeg|gif|mp3)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
              }
           },
           {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
           },
           {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
           },
           
       ]
    },
    plugins: [
        new HtmlPlugin({ template: resolve('./', 'index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
          }),
          new BundleAnalyxerPlugin()
       ]
}