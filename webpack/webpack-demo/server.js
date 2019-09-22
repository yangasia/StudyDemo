const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath//创建虚拟运行环境
}))

app.listen(3000, function(){
    console.log('服务已经启动');
    console.log('请访问loaction:3000');
});