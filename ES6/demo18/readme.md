# Module 的语法
[教程](http://es6.ruanyifeng.com/#docs/module)
[教程](http://es6.ruanyifeng.com/#docs/module-loader)

#### 1. Module概述
+ CommonJS 和AMD的模块加载是在运行时加载，没办法做静态优化
+ ES6 的模块加载是在编译时加载，就能确认依赖关系和输出对象  
  
**ES6模块加载的优点**
1. 静态加载
2. 不在需要UMD模块格式，
3. 浏览器的新API可以通过模块的方式提供，将来就能全部实现
4. 不需要对象作为命名空间，比如Math对象
   
#### 2.严格模式
+ ES6的模块自动采用严格模式  

**严格模式的主要限制**  
1. 变量必须声明后再使用
2. 函数的参数不能有同名属性