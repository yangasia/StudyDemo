# Symbol
[教程](http://es6.ruanyifeng.com/#docs/symbol)  
#### 1.概述
***
ES6新的原始数据类型Symbol，表示独一无二的值，是JavaScript的第7种数据类型  
+  JavaScript数据类型：Symbol，undefined,null,Boolean,String,Number,Object    
```javascript
let s = Symbol();
let s1 = Symbol('s1');//s1只用来区分symbol值
```
##### 注意事项：
1. Symbol() 前不能使用 new命令，它是一种类似字符串的类型，不是对象不能添加方法
2. 任何两个Symbol值都不相等
3. Symbol值可以转化为字符串和布尔值，布尔值为true
***
#### 2.Symbol.prototype.description
***
```javascript
const sym = Symbol('foo');
//sym 的描述是字符串是foo
String(sym);//"Symbol(foo)"
sym.toString();//"Symbol(foo)"
sym.description //"foo"  ES2019
```
***
#### 3.作为属性名的Symbol
***
```javascript
//3种添加属性的方法
let mySymbol = Symbol();

let a = {};
a[mySymbol] = 'hello';

let b = {
    [mySymbol]:'hello'
};

let c = {};
Object.defineProperty(c, mySymbol, {value:'hello'});
console.log(a[mySymbol]);
console.log(b[mySymbol]);
console.log(c[mySymbol]);
```
+ Symbol属性必须防止[]中间，该属性是公开属性，不能使用点运算
***
#### 4.消除魔术字符串
***
把Symbol用在变量的值保证唯一性，解决魔术字符串
***
#### 5.属性名的遍历
***
1. for...in, for...of, Object.keys(),Object.getOwnPropertyNames(), JSON.stringify()都不能返回Symbol属性名，
2. Object.getOwnPropertySymbols()返回所有自身Symbol属性名的Symbol值
3. 这种遍历特性可以用在定义对象的非私有的内部方法
***
>Symbol.for('str')
>>查询有没有该参数的的Symbol值，有就返回该值，没有就新建该值,这种方式创建的Symbol会被登记在全局环境中，提供查询

>Symbol.keyFor('str')
>>查询登记在全局环境中的Symbol值得描述
#### 6.Symbol的内置值
***
1. Symbol.hasInstance
```javascript
class MyClass {
    [Symbol.hasInstance](foo){
        return foo instanceof Array;
    }
}
[1,2,3] instanceof new MyClass()//true
//Symbol.hasInstance 是对象的 intanceof 命令调用的方法
```
2. Symbol.isConcatSpreadable  
对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象在Array.prototype.concat()是否可以展开，  
3. Symbol.species
指向对象的构造函数，创建衍生对象时会使用该属性，就事项了衍生对象的原型不是本原型  
创建衍生对象时就会使用这个属性返回的函数，作为构造函数  
子类使用继承的方法时，返回基类的实例，而不是子类的实例
```javascript
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
class MyArray2 extends Array {
}

const a = new MyArray();
const b = a.map(x => x);
b instanceof MyArray // false
b instanceof Array // true

const c = new MyArray2();
const d = c.map(x => x);
d instanceof MyArray // true
d instanceof Array // true
```
4. Symbol.repalce  
对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
5. Symbol.match  
对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值
6. Symbol.repalce  
对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
7. Symbol.split  
对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
8. Symbol.iterator  
对象的Symbol.iterator属性，指向该对象的默认遍历器方法
9. Symbol.toPrimitive  
对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
10. Symbol.toStringTag
对象的Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。
```javascript
// 例一
({[Symbol.toStringTag]: 'Foo'}.toString())
// "[object Foo]"

// 例二
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x = new Collection();
Object.prototype.toString.call(x) // "[object xxx]"
```
11. Symbol.unscopables  
对象的Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。

>with(obj){
    code....
}   
with 为其代码块指定作用域链的顶部，也就是在这个代码块的顶部不再是window或者global
***