// 'use strict';
// function log(x, y) {
//     y = y || 'World';
//     console.log(x, y);
//   }
//   log('hello',false)

// console.log(this);
// function func() { 
//     console.log(this);

//  }
//  func();

// function foo() {
//     var id=12;
//     setTimeout(() => {
//       console.log('id:', this.id);
//     }, 100);
//   }
  
//   var id = 21;
  
//   foo.call({ id: 42 });
//   foo();
// //管道函数，一个函数的返回值作为后面函数的参数进行调用
//   const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);

//   function pipeline (funcs) {
//     return function (val) {
//       return funcs.reduce(function(){
//         return function(a,b){
//           return b(a);
//         }
//       },val);
//     }
//   }


// function factorial(n){
//   if(n === 1) return 1;
//   return n*factorial(n-1);
// }

function factorial2(n,total=1){
  if (n === 1) return total;
  return factorial2.bind(null,n-1,n*total);
}

// function test1(num){
//   for(var i=num-1;i>=1;i--){
//   num *=i;
//   }
//   return num;
//   }


// var a = new Date();
// // factorial(10000);
// var b = new Date();
// factorial2(10000);
// // console.log(test1(100000000));
// var c = new Date();
// console.log(b.getTime()-a.getTime());
// console.log(c.getTime()-b.getTime());

// function Fibonacci (n) {
//   if ( n <= 1 ) {return 1};

//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// }

// // Fibonacci(10) // 89
// Fibonacci(100) // 超时
// // Fibonacci(500) // 超时
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

// console.log(Fibonacci2(100),Fibonacci2(1000),Fibonacci2(10000));

// Fibonacci2(100) // 573147844013817200000
// Fibonacci2(1000) // 7.0330367711422765e+208
// Fibonacci2(10000) // Infinity

function trampoline(f) {//蹦床函数
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}

function sum(x, y) {
  if (y > 0) {
    return sum.bind(null,x + 1, y - 1);
  } else {
    return x;
  }
}

function tco(f) {//真实的尾递归函数优化
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}

var sum = tco(function(x, y) {
  if (y > 0) {
    return sum(x + 1, y - 1)
  }
  else {
    return x
  }
});

sum(1, 100000)

// trampoline(sum(1, 10000000))
// console.log(trampoline(factorial2(10000000)));