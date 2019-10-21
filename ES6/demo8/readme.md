# ES6中的对象
[教程](http://es6.ruanyifeng.com/#docs/object)  
#### 1.对象的扩展
***  
1. ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法  
2. 属性名表达式，当变量作为属性key时,该变量不能是引用类型
3. 方法的name属性，bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous
4. 属性的可枚举和遍历  
Object.getOwnProperDescriptor()返回对象某一属性的描述
```javascript
let obj = {
    foo:123
};
console.log(Object.getOwnPropertyDescriptor(obj,'foo'))//如下打印结果
/*
{ 
    value: 123,//值
    writable: true,//可写性     
    enumerable: true,   //可枚举性
    configurable: true //是否可以进行重新定义属性包括删除属性
}
*/
```
##### 遍历对象的方式
1. for...in 对象自身和继承的可枚举属性（不含Symbol属性）  
2. Object.keys(obj) 返回对象自身可枚举属性的数组（不含Symbol属性） 
3. Object.getOwnPropertyNames(obj) 返回一个数组，包含所有自身属性（不含Symbol属性） 
4. Object.getOwnPropertySymbols(obj) 返回自身Symbol属性的数组
5. Reflect.ownKeys(obj) 返回对象自身所有键名  
以上5种遍历方法的遍历顺序顺序
+ __首先遍历所有数值键,按照数值升序排列。__
+ __其次遍历所有字符串键，按照加入时间升序顺序。__
+ __最后遍历所有Symbol键，按照加入时间升序顺序。__  
#### super关键字
this关键字总是指向函数所在的当前对象(运行时)，super关键字指向当前对象的原型对象(运行时)；  
箭头函数中的this指向，箭头函数定义时的对象，而不是使用时的对象。
***
#### 2.对象新增方法
***
1. Object.is() 比较两个值是否相等，主要用来弥补=== 对NAN和+0，-0的弥补
```javascript
console.log(+0 === -0);//true
console.log(NaN === NaN);//false
//ES5部署方法
Object.defineProperty(Object, 'is', {
    value:function(x, y){
        if(x === y){//针对正负零
            return x !== 0 || 1/x === 1/y;
        }
        return x !== x && y !== y;//针对NaN
    },
    configurable:true,
    enumerable:false,
    writable:true
});
```
2. Object.assign(targit,...sources), 将source对象自身的可枚举属性复制到targit对象中(包含Symbol属性)；只进行浅拷贝,会把数组和字符串识别为对象；如果属性是getter方法会复制该方法的返回值，同时返回targit对象；
```javascript
typeof Object.assign(2); // "object"  转化数据类型，但是undefined和null会报错
```
用途
- 为对象添加属性
```javascript
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}
```
- 为对象添加方法
```javascript
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});
```
- 克隆对象（浅拷贝）
- 合并多个对象
- 为属性指定默认值值
```javascript
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
};

function processContent(options) {
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
  // ...
}
```
3. Object.getOwnpropertyDescriptors(obj),返回指定对象自身所有属性的 ___描述对象___
4. Object.setPrototypeOf(obj,prototype),为obj指定原型对象
5. Object.getPrototypeOF(obj),获取obj的原型对象
6. Object.keys(obj),返回一个数组，成员是参数对象自身可枚举属性(不含Symbol属性)的键名
7. Object.values(obj),返回一个数组，成员是参数对象自身可枚举属性(不含Symbol属性)的键值
9. Object.entries(obj),返回一个二维数组，成员是一个属性，二维是键和值,这些属性都是自身可枚举属性(不含Symbol属性)。可以把对象转为Map结构
```javascript
let obj4 = {
    a:1,
    b:2,
    c:3
};
console.log('\nentries:\n', Object.entries(obj4))
/*
entries:
 [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
*/
```
10. Object.fromEntries(obj)是Object.entries(obj)的反方向
***