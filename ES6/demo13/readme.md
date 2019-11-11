# Promise 对象
[教程](http://es6.ruanyifeng.com/#docs/promise)  
#### 1. Promise含义
***
###  Promise特点
1. 对象的状态不受外界营销，Promise实列产生时定义状态变化，不能被外界改变  

2. 两种转化 pending到fulfilled,pendin到rejected两种状态，一旦结果改变就不会再变了，需要注意fulfilled和resolved等同一个状态，  

3. 状态反复发生变化Stream模式比Pormise好
***
#### 2. Promise 基本用法
***
```javascript
const promise = new Promise(function(resolve, reject){
    //resolve 和reject 是两个Promise对象的两个方法
    //codeing...异步操作
    if(/*异步操作成功*/){
        resolve(value);
    } else{
        reject(error);
    }
});
promise.then(function(value){//只有在当前脚本所有同步任务执行完才会执行
    // resolve(value) 调用本函数
}, function(error){
    //reject(error)//调用本函数
});
```
>编码建议:
>>一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return语句，这样就不会有意外。  
***
#### 3. Promise 方法  
***
_Promise()是一个构造函数   所以方法房子原型上Promise.prototype_  下面的方法有的还是提案，暂时不可用在 生产环境，需要自己确认js解释器是否实现该方法
1. then(func,func)  _参数依次为resolve回调函数和reject回调函数_

2. catch(func), _then(null,func)和then(undefined,func)的别名_ 用于指定发生错误时的回调函数。

3. finally() 不管resolve还是reject都会调用，不依赖Promise执行结果

4. all([p1,p2,p3]) 参数为具有遍历器的对象 对p1,p2,p3取逻辑与  resolve为真，reject为假，真调用当前对象的resolve回调函数

5. race([p1,p2,p3]) 参数为具有遍历器的对象 p1,p2,p3 先发状态改变的状态为当前对象的状态

6. allSettled([p1,p2,p3]) 等待p1,p2,p3状态都发生变化，才会创建新的promise

7. any([p1,p2,p3]) 与all()方法相反

8. resolve() 可以将现有对象转化为Promise对象 有四种执行情况请查看教程

9. reject() 返回一个新的 Promise 实例，该实例的状态为rejected
>编码建议:
>>建议总是使用catch方法，而不使用then方法的第二个参数。方便捕获代码错误 
***