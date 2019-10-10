数值扩展http://es6.ruanyifeng.com/#docs/number

Number.EPSILON 最新的比1大的浮点叔叔 1+2E-52

浮点数运算存在误差，不能用作判断条件  console.log(0.1+0.2==0.3);//false

Number.EPSILON*Math.pow(2,2)  用来设置可以接受的误差

数字表示范围-2^53~2^53不包含两端 也就是十进制的16为，最大为9007199254740992

新增指数运算 右结合
2**2 //4
2**3 //8