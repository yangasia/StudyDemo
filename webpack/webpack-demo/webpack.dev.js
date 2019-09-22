const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool:'inline-source-map',//错误定位
    devServer:{
        contentBase:'./dist'//配置webpack-dev-server
    }
});