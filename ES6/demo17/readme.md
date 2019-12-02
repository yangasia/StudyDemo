# Class 基本语法
[教程1](http://es6.ruanyifeng.com/#docs/class)  
[教程1](http://es6.ruanyifeng.com/#docs/class-extends)  
__ES6的class可以看着是语法糖，他的绝大部分功能ES5都可以做到__
#### 1.基本语法
+ class 的类型是函数
+ new class 调用的是class内部的constructor方法
+ class 里面没有constructor方法，会默认创建一个空的
+ class 与 函数的区别就是class必须用new调用
+ class 的属性名可以使用表达式
#### 注意点
1. 类和模块的内部默认就是严格模式
2. 类不存在变量提升
3. class的name属性就是类名
4. 方法前面加* 会变成Generator函数
```javascript
class Foo {
  constructor(...args) {
    this.args = args;
  }
  * [Symbol.iterator]() {//for...of调用，Iterator接口
    for (let arg of this.args) {
      yield arg;
    }
  }
}
```
5. class 内部的this默认指向实列，如果作为模块导出内部方法为因为this报错，解决方法是在constructor时为方法绑定this，或者使用箭头函数解决这个问题
```javascript
class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }

  // ...
}
class Obj {
  constructor() {
    this.getThis = () => this;
  }
}

const myObj = new Obj();
myObj.getThis() === myObj // true
```
#### 2. 静态方法  
+ class的方法默认会被实例继承，在方法前加上static关键字，静态方法就不会被继承，静态方法中this指向类，静态方法可以被子类继承，
```javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';//静态方法只能被子类的静态方法调用
  }
}
Foo.classMethod() // "hello"
Bar.classMethod() // "hello, too"
```
#### 3. 实例属性的写法
+ 在constuctor函数中写在this上
+ 写在类的的顶部，不需要this
```javascript
class test{
  _count = 0;
  constructor(){
    this.count = 0;
  }
  increment(){
    this.count++;
    this._count++;
  }
}
```
#### 4.静态属性
_通过static 定义静态属性目前只是一个提案_ 有其他的方案实现
```javascript
class Foo {
}
Foo.prop = 1//类似function的name属性类似
```
#### 5. 私有属性和方法
```javascript
//私有方法的两种实现方法
function bar(baz){
  retrun this.snaf = baz;
}
const Symbar = Symbol('bar');
const Symsnaf = Symbol('Snaf');
class Foo {
  foo(baz){//内部调用的方法
    bar.call(this.baz);
  }
  [Symbar](baz){//Symbol方法实现，但是可以被Reflect.OwnKeys()获取
    return this[Symsnaf] = baz;
  }
}
//私有属性还在提案中
```
#### 6. new.target属性
+ new.target 获取的时new命令作用域那个构造函数
+ 在类中使用 new.target 返回本类，如果有子类返回子类
```javascript
//new.taget的应用，写出不能独立使用的类
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
```
***
# class 的继承
+ 继承只有需要定义类的时候extends类名就行可以
```javascript
class ColorPoint extends Point{
  //构造函数没有会自动生成并在内部调用super()
}
``` 
+ 子类的中构造函数必须先调用super(),this才可以使用
+ 通过子类创建的实列，instanceof 判断类型，两个都会是true
+ 静态方法也会被继承
+ Object.getPrototypeOf()可以获取父类
#### super关键值
1. super作为函数调用，代表父类的构造函数
2. super作为对象，在普通方法中指向父类的原型对象，在静态方法中指向父类  
> 注释：在普通方法中，super不能调用父类的实列得方法
3. 在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例
#### class的继承链
+ class同时拥有prototype属性和__proto__属性
> 1. 子类的__proto__属性，表示构造函数的继承，总是指向父类
> 2. 子类的prototype属性的__proto__属性表示方法的继承，总是指向父类的prototype属性
```javascript
class A {
}
class B extends A {
}
console.log(B.__proto__ === A)//true
console.log(B.prototype.__proto__ === A.prototype)//true
```
> **作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；  
作为一个构造函数，子类（B）的原型对象（prototype属性）是父类的原型对象（prototype属性）的实例**   

> 3. 子类的原型的原型，是父类的原型 
```javascript
let a = new A()
let b = new B();
console.log(b.__proto__.__proto__ === a.__proto__)//ture
```
##### class原型图如下：
![class 原型图](https://raw.githubusercontent.com/yangasia/StudyDemo/master/ES6/demo17/class1.png)

#### 继承原生对象
+ ES5 中因为子类无法获得原生构造函数内部属性，导致不能继承，ES6中能完美继承
+ ES6 继承Object有一个行为差异，子类无法通过super方法向父类传参

#### Mixin 模式的实现
+ Mixin 指对各对象合成一个新对象，新对象具有各个组成成员的接口
```javascript
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
```