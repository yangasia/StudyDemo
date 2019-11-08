# Proxy
#### 1.概述
***
+ Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
```javascript
let obj = new Proxy({},{
    get:function(target,key,receiver){
        console.log(`getting ${key}!`);
        return Reflect.get(target,key,receiver)
    },
    set:function(target,key,value,receiver){
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    },
    has:function(target,key){
        console.log(`hasing ${key}`);
        return true;
    },
    deleteProperty:function(target,key){
        console.log(`deleteProperty ${key}`);
        return true;
    },
    ownKeys:function(target){
        console.log(`ownKeys ${target}`);
        return Object.getOwnPropertyNames(target);
    }
})

obj.count = 1;//set
obj.count;//get
'count' in obj;//has
delete obj.count;//deleteProperty
console.log(Object.keys(obj))//ownKeys
```
##### proxy可执行的拦截Object操作
1. get(target, propKey, receiver) 拦截对象属性的读取  

2. set(target, propKey, value, receiver) 拦截对象属性的设置  

3. has(target, propKey) 拦截propKey in proxy的操作

4. deleteProperty(target, propKey) 拦截delete proxy[propKey]的操作，返回一个布尔值

5. ownKeys(target) 拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组

6. getOwnpropertyDescriptor(target, propKey) 拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象

7. defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

8. preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。

9. getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。

10. isExtensiable(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。

11. setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。

12. apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

13. construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)  
##### 参数注解
+ target 目标对象
+ propKey 属性名
+ receiver proxy实列本身
+ value 属性值
+ object 目标对象的上下文对象（this）
+ args 目标对象属性的参数数组
+ 注意拦截操作优先级低于目标对象本身的属性描述
+ 拦截操作需要注意this的变化
***