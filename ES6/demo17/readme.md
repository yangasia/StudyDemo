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
+ class的方法默认会被实例继承，在方法前加上static关键字，静态方法就不会被继承，静态方法中this执行类，静态方法可以被子类继承，
```javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}
Foo.classMethod() // "hello"
Bar.classMethod() // "hello, too"
```
实例属性的新写法