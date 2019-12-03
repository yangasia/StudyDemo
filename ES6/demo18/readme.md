# Module 的语法
[教程](http://es6.ruanyifeng.com/#docs/module)  
[教程](http://es6.ruanyifeng.com/#docs/module-loader)  
**注意：** ES6 的模块系统再node上不使用，必须使用 Babel 进行编译才能使用

#### 1. Module概述
+ CommonJS 和 AMD 的模块加载是在运行时加载，没办法做静态优化
+ ES6 的模块加载是在编译时加载，就能确认依赖关系和输出对象  
  
**ES6模块加载的优点**
1. 静态加载
2. 不在需要 UMD 模块格式，
3. 浏览器的新 API 可以通过模块的方式提供，将来就能全部实现
4. 不需要对象作为命名空间，比如Math对象
   
#### 2.严格模式
+ ES6 的模块自动采用严格模式  

**严格模式的主要限制**  
1. 变量必须声明后再使用
1. 函数的参数不能有同名属性
3. 不能使用 with 语句  
4. 不能对只读属性赋值，否则报错
5. 不能使用前缀0表示八进制数，否则报错
6. 不能删除不可删除的属性
6. 不能删除变量 delete prop，会报错，只能删除属性 delete global[prop]
6. eval 不会在它的外层作用域引入变量
6. eval 和 arguments 不能被重新赋值
6. arguments 不会自动反映函数参数的变化
6. 不能使用 arguments.callee
6. 不能使用 arguments.caller
6. 禁止 this 指向全局对象
6. 不能使用 fn.caller 和 fn.arguments 获取函数调用的堆栈
6. 增加了保留字（比如 protected、static 和 interface）

#### 3. export 命令
+ export 可以导出变量，函数，类
+ 可以用 as 进行重命名
+ 对外接口和内部变量必须一一对应
+ export 必须处于模块的顶层，不能再分支内
```javascript
// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};
```
#### 4. import 命令
+ 可以使用 as 重命名
+ import 命令具有提升到顶部 首先执行
+ import 是静态执行，不能使用表达式和变量
+ 相同的 import 语句之后执行异常
+ 不建议通过 Babel 转码 CommenJS 模块的require命令同时使用，因为不知道那个先执行

#### 5. 模块的整体加载
+ 通过 * 加载模块的全部属性
#### 6. export default 命令
+ 为模块指定默认输出
#### 7. export 与 import 的复合写法
```javascript
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
```
#### 8. 模块之间可以继承
#### 9. 跨模块常量
#### 10 import() 当前只是一个提案
***
# Module 的加载实现
#### 