# 数组扩展
[点击查看教程](http://es6.ruanyifeng.com/#docs/array)  
1. ...array
***
把数组转化成逗号分隔的序列，需要注意不是字符串，可以用在函数的参数  
注意看如下代码的打印结果，方便理解:
```
@Override
console.log(...[1,2,3]);
console.log(1,2,3);
let a = [1,2,3];
console.log(...a);
```
***