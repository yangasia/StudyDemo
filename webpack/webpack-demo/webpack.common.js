const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js',
        // another:'./src/another-module.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'production'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        // chunkFilename:'[name].bundle.js',//动态引入方案感觉没什么用
        path:path.resolve(__dirname, 'dist')
    },
    optimization:{
        splitChunks:{
            chunks: 'all'//防止重复依赖打包
        }
    }
};