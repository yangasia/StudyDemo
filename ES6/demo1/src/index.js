require('@babel/register');
require('./es6.js');
// var babel = require("@babel/core");
//bable API
var es6Code = 'let x = n => n + 1';
var es5Code = require('@babel/core')
  .transform(es6Code, {
    presets: ['@babel/env']
  })
  .code;

console.log(es5Code);