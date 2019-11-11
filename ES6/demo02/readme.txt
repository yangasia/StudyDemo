let和const命令
url：http://es6.ruanyifeng.com/#docs/let

for循环括号那部分是父作用域，而大括号内是子作用域

const let 不进行变量提升，

在一个作用域内（代码块），使用let和const声明变量，在当前代码块声明前使用该变量都是不合法的 这个就是“暂时性死区”
typeof 不在是一个百分之百得安全操作

let 不允许在相同作用域内，重复声明相同的变量

块级作用域李定义函数应该使用函数表达式

const 本质是保存在内存的里的值不能改变，但是如果const的是引用，只是保存在内存里的内存地址不变
也就是说，不能const一个对象，
对象冻结应该用Object.freeze(obj)
