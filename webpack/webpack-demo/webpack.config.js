const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry:'./src/index.js',
    entry:{
        app:'./src/index.js',
        print:'./src/print.js',
    },
    devtool:'inline-source-map',//js报错定位
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output:{
        // filename:'bundle.js',
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
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