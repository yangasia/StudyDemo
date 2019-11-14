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

//yield只能在Generator中实现，forEach中也不行都会报错 
function* gen(){
  // some code
}

var g = gen();

g[Symbol.iterator]() === g //true
//Generator 函数就是遍历器生成函数 和对象的Symbol.iterator属性相同

Object.prototype[Symbol.iterator] = function*(){//给Object添加Iterator接口
    let propKeys = Object.keys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
      }
}
```
***
#### 2.next方法
***
yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数， _该参数就会被当作上一个yield表达式的返回值_。
```javascript
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
```
上面的代码很明确的给出带参数和不带参数的区别
***
#### 3. for...of 循环
***
for...of 循环可以自动遍历Generator函数运行时生成的Iterator对象，此时不需要调用next
```javascript
function* foo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;//for...of不执行return
}
for(let v of foo()){
    console.log(v);
}
console.log(foo().next());
// 1
// 2
// 3
// 4
// 5
// { value: 1, done: false }
```
***
#### 4. Generator.prototype.throw()
***
```javascript
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');//注意可以有参数
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
```
+ 使用Generator对象的throw 如果Generator函数内部有try...catch，就会被内部捕获，如果没有就会被外部catch捕获，外部的throw只能被外部捕获  
+ throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。因为没有执行next就表示Generator函数还没有执行
+ throw被内部捕获以后next会默认的执行一次
+ Generator函数内部的try...catch也是受执行顺序的营销，如果try...catch已经执行过在抛出错误，也是接受不到错误脚本掉，反之亦然
***
#### 5. Generator.prototype.return()
***
+ Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。如果没有给定值，会返回undefined done 为true
+ 如果 Generator 函数内部有try...finally代码块，且正在执行try代码块，那么return方法会导致立刻进入finally代码块，执行完以后，整个函数才会结束。
***
#### 6 next(),throw(),return()共同点
+ 共同点就是把对应eild表达式换成对应的参数
#### 7 yield* 表达式
***
+ yield* 用来调用用Generator函数
```javascript
function* foo1() {
    yield 'a';
    yield 'b';
}

function* bar1() {
    yield 'x';
    // 手动遍历 foo()
    for (let i of foo1()) {
        yield i;
    }
    yield 'y';
}
function* bar2(){
    yield 'x';
    yield* foo1();
    yield 'y';
}

for (let v of bar1()){
    console.log('bar1:'+v);
}
for (let v of bar2()){
    console.log('bar2:'+v);
}
// bar1:x
// bar1:a
// bar1:b
// bar1:y
// bar2:x
// bar2:a
// bar2:b
// bar2:y
```
+ yield* 表达式是一个Generator函数，该函数返回的遍历器会自己执行遍历操作
+ yield* 表达式是一个对象时，如果该对象有Iterator接口，就会自己调用
***
#### 8. 作为对象属性的Genrator函数
```javascript
let obj = {
  * myGeneratorMethod() {
    ···
  }
};
```
#### 9. Generator函数的this
+ Generator函数中，并不是指向实列，而是函数本身，函数返回的也不是this对象
```javascript
function* g() {
  this.a = 11;
}
g.prototype.hello = function () {
  return 'hi!';
};
let obj = g();
obj.hello() // 'hi!'
obj.next();
obj.a // undefined 拿不到a 因为不在obj的原型链上
```
#### 10.Generator函数的含义
```javascript
//状态控制
var ticking = true;
var clock = function() {
  if (ticking)
    console.log('Tick!');
  else
    console.log('Tock!');
  ticking = !ticking;
}
//这种方式状态容易被破坏

var clock = function* () {
  while (true) {
    console.log('Tick!');
    yield;
    console.log('Tock!');
    yield;
  }
};
//更简洁安全

//实现协程，通过Generator函数持续不断交换代码执行权，
//Generator 暂停后 它的上下文退出执行堆栈，但是不会丢失
```
#### 11. 应用
+ 异步操作的同步化表达，
+ 控制流管理
+ 部署 Iterator 接口
+ 作为数据结构
***
#  Generator函数异步应用
ES6以前有如下4种异步编程方法
+ 回调函数
+ 事件监听
+ 发布/订阅
+ Promise