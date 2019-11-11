函数扩展http://es6.ruanyifeng.com/#docs/function

ES6 新增函数参数默认值 function Point(x = 0, y = 0)
改变量不能再使用let和const定义
函数默认值可以接一个函数执行语句，用于抛错

//管道函数，一个函数的返回值作为后面函数的参数进行调用
  const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);

尾调函数节约内存 return f(c) 不用保留外层调用栈

函数调用自身，称为递归。如果尾调用自身，就称为尾递归。为了解决调用栈报错 Maximum call stack size exceeded  栈溢出
还能解决超时问题

ES6 的尾调用优化只在严格模式下开启，正常模式是无效的