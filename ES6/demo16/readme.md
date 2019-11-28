# async 函数
[教程](http://es6.ruanyifeng.com/#docs/async)  
+ async 函数就是Generator函数的语法糖
+ await 命令后面可以是Promise对象或元素类型的值（但是会被转为Promise对象）
+ await 命令就是内部then命令的语法糖,所以Promise状态变化Promise就执行结束了
+ async 函数默认返回的Promise对象，所以async函数错误处理机制需要注意
> 1. async 函数内部的return的值会被当成then方法的回调函数的参数
> 2. async 函数返回的Promise必须等到函数内部await命令全部执行完才会发生状态改变，除非遇到return 和报出错误，错误还会被 catch方法接受到
> 3. 任何一个await命令reject后整个async函数都会reject
+ async函数要想不被错误中断，可以使用try...catch语句捕获错误或者在await命令接Promise的catch方法
+ 多个await 后面的代码如果互相不依赖应该让其同时触发
+ async 函数可以保留运行堆栈