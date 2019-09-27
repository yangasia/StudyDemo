$npm run es-checker  //查看node环境对ES支持情况

bable的使用
$npm i -D @babel/core  //安装babel
配置.babelrc
$npm i -D @babel/preset-env  //最新转码规则
$npm i -D @babel/preser-react  //react转码规则
在根目录下新建.babelrc文件比新建规则
$npm i -D @babel/cli
cli使用方法
$npx babel test_babel.js //直接控制台输出编码结果
$npx babel test_babel.js -o test_compiled.js  //输出到指定文件. -o 等价 --out-file
$npx babel src -d lib //目录转码 -d 等价 --out-dir
$npx babel src -d lib -s //生成source map文件

bable-node帮助node REPL环境直接执行ES6代码
$npm i -D @babel/node
$npx babel-node //进入node命令模式  后接文件也可直接运行

@babel/register 模块优化require命令 时时转码，不适合生产环境
$npm i -D @babel/register 

babel API 提供给js在代码中转换的能力

babel 默认只转换语法，不会转换js的API 需要为运行环境提供polyfill（垫片）
$npm i -D @babel/polyfill
需要在代码引入import和require


本demo的http://es6.ruanyifeng.com/#docs/intro