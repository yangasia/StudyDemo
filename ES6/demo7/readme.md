# 数组扩展
[点击查看教程](http://es6.ruanyifeng.com/#docs/array)  

#### 扩展运算符  ...array
***
把数组转化成逗号分隔的序列，需要注意不是字符串，可以用在函数的参数  
注意看如下代码的打印结果，方便理解:
```javascript
console.log(...[1,2,3]);
console.log(1,2,3);
let a = [1,2,3];
console.log(...a);
```
只能在函数调用时才能放在括号内，否则会报错  
##### 应用
1. 替代函数的apply
```javascript
//ES5
Math.max.apply(null,[1,2,3]);
//ES6
Math.max.(...[1,2,3]);
//正常写法
Math.max(1,2,3);
```
2. 数组深拷贝
```javascript
const a1 = [1,2];
//ES5
const a2 = a1.cocat();
//ES6
const a3 = [...a1];
```
3. 数组合并
```javascript
const a1 = ['a','c'];
const a2 = ['c'];
const a3 = ['d','e'];
//ES5
console.log(a1.concat(a2,a3));
//ES6
console.log([...a1, ...a2, ...a3])
//如果数组里面嵌套对象，注意深浅拷贝的问题
```
4. 调用Iterator接口，将其转变为真实数组
***
#### Array.from()
***
把类似数组的数据结构（的有length属性）和可遍历对象（Iterable），转化成真实数组  
```javascript
//Array.from('代转化数据'，func,this)
//Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度
```
***