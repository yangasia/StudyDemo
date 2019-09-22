const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry:'./src/index.js',
    entry:{
        // app:'./src/index.js',
        // print:'./src/print.js',
        app: './src/index.js'
    },
    devtool:'inline-source-map',//js报错定位
    devServer:{
        contentBase:'./dist',
        hot:true,//热加载模块
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),//按import加载模块，这样入口就变成一个了
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        // filename:'bundle.js',
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: '/'//webpack-dev-middleware指明运行路径
    },
    mode:'production',//压缩打包js
    //文件打包规则
    // module:{
    //     rules:[
    //         {
    //             test:/\.css$/,
    //             use:[
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {
    //             test:/\.(png|svg|jpg|gif)$/,
    //             use:[
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test:/\.(woff|woff2|eot|ttf|otf)$/,
    //             use:[
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test:/\.(csv|tsv)$/,
    //             use:[
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test:/\.xml$/,
    //             use:[
    //                 'xml-loader'
    //             ] 
    //         }
    //     ]
    // }
}