# Generator 函数的语法
[教程1](http://es6.ruanyifeng.com/#docs/generator)
[教程2](http://es6.ruanyifeng.com/#docs/generator-async)
#### 基本概念
***
Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

Generator 函数返回的是一个遍历器对象

Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。

```javascript
function* helloWorldGenerator(){
    yield 'hello';//yield 表示调用next()的返回语句
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();
console.log(hw);
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
/*
*   Object [Generator] {}
*   { value: 'hello', done: false }
*   { value: 'world', done: false } 
*   { value: 'ending', done: true } 
*   { value: undefined, done: true }
*/
//每一次next()调用都会被记住。再次调用从上次next的地方开始
//
//value表示状态值就是yield或者return后面的值，如果没有值就是undefined，done表示遍历是否结束
```
***