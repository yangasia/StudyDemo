# Reflect
[教程](http://es6.ruanyifeng.com/#docs/reflect)
#### 1.概述
***
1. 将 _Object_ 对象的一些明显属于语言内部的方法（Objeck.defineProperty）放到 _Relfect_ 对象上,通过 _Reflect_ 可以拿到语言内部方法  

2. 修改某些Object方法返回的结果，让其合理  

3. 让Object操作都变成函数行为

4. Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法
##### 方法如下 与Proxy的方法保持一致
1. Reflect.apply(target, thisArg, args)
2. Reflect.construct(target, args)
3. Reflect.get(target, name, receiver)
4. Reflect.set(target, name, value, receiver)
5. Reflect.defineProperty(target, name, desc)
6. Reflect.deleteProperty(target, name)
7. Reflect.has(target, name)
8. Reflect.ownKeys(target)
9. Reflect.isExtensible(target)
10. Reflect.preventExtensions(target)
11. Reflect.getOwnPropertyDescriptor(target, name)
12. Reflect.getPrototypeOf(target)
13. Reflect.setPrototypeOf(target, prototype)
***
#### 观察者模式的实现
```javascript
const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';

const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}
```