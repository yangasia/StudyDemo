const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js',
        another:'./src/another-module.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'production'
        })
    ],
    output:{
        // filename:'[name].bundle.js',
        filename:'[name].[chunkhash].js',
        // chunkFilename:'[name].bundle.js',//动态引入方案感觉没什么用
        path:path.resolve(__dirname, 'dist')
    },
    optimization:{
        moduleIds:'hashed',//只更新依赖
        runtimeChunk:'single',//稳定hash值，根据文件更新更新hash
        splitChunks:{
            cacheGroups:{
                vendor:{//vendor捆绑包
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendors',
                    chunks:'all'
                }
            }
            // chunks: 'all'//防止重复依赖打包,单独打包共同依赖
        }
    }
};