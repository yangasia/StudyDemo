function* helloWorldGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();
// console.log(hw);
// console.log(hw.next(1));
// console.log(hw.next(1));
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
function* gen(){
    let a = 0;
    console.log(a);
    yield a = 123 + 456;
    return a;
} 
// console.log(gen().next())
// console.log(gen().next())

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

// console.log(iter.next()
// ,iter.next()
// ,iter.next()
// ,iter.next())

function* foo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
// for(let v of foo()){
//     console.log(v);
// }
// console.log(foo().next());
function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }
  
//   for (let n of fibonacci()) {
//     if (n > 1000000000000) break;
//     console.log(n);
//   }
Object.prototype[Symbol.iterator] = function*(){
    let propKeys = Object.keys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
      }
}
// console.log(Object.prototype);

var obj = {
    a:1,
    b:2,
    c:3
}
// for(let i of obj){
//     console.log(i);
// }
// for (let i in obj){
//     console.log(i);
// }
// var g = function* () {
//     try {
//         yield;
//     } catch (e) {
//         console.log('内部捕获', e);
//     }
// };

// var i = g();
// i.next();

// try {
//     i.throw('a');
//     i.throw('b');
// } catch (e) {
//     console.log('外部捕获', e);
// }

var gen1 = function* gen(){
    // yield console.log('a');
    try {
        yield console.log('d');
      } catch (e) {
        // ...
      }
    yield console.log('b');
    yield console.log('c');
  }
  
//   var g1 = gen1();
//   g1.next() // a
// //   g1.next() // a
//   g1.throw() // b
//   g1.next() // c
function* genretrun(){
    console.log('next1')
    yield console.log('1');
    console.log('next2')
    yield console.log('2');
    console.log('next3')
    yield console.log('3');
    console.log('next4')
    yield '2';
    yield '3';
    return console.log('5');
}
// var reg = genretrun();
// reg.next();
// reg.return('1');
// console.log(reg.next());

// console.log(genretrun().return(1))
// function* foo(x) {
//     var y = 2 * (yield (x + 1));
//     y = 3;
//     var z = yield (y / 3);
//     return (x + y + z);
//   }
  
//   var a = foo(5);
//   console.log(a.next()) // Object{value:6, done:false}
//   console.log(a.next()) // Object{value:NaN, done:false}
//   console.log(a.next()) // Object{value:NaN, done:true}
  
//   var b = foo(5);
//   console.log(b.next()) // { value:6, done:false }
//   console.log(b.next(12)) // { value:8, done:false }
//   console.log(b.next(13)) // { value:42, done:true }

function* foo1() {
    yield 'a';
    yield 'b';
}

function* bar1() {
    yield 'x';
    // 手动遍历 foo()
    for (let i of foo1()) {
        yield i;
    }
    yield 'y';
}
function* bar2(){
    yield 'x';
    yield* foo1();
    yield 'y';
}

// for (let v of bar1()){
//     console.log('bar1:'+v);
// }
// for (let v of bar2()){
//     console.log('bar2:'+v);
// }
// var isfor = true;
// var bar1obj = bar1();
// for (;isfor;){
//     let mynext =  bar1obj.next();
//     console.log(mynext);
//     isfor=!mynext.done;
// }

function* foow() {
    yield 2;
    yield 3;
    return "foo";
  }
  
  function* barw() {
    yield 1;
    var v = yield* foow();
    console.log("v: " + v);
    yield 4;
  }
  
  var it = barw();
  
  // console.log(it.next())
  // console.log(it.next())
  // console.log(it.next())
  // console.log(it.next())
  // {value: 1, done: false}
//   it.next()
//   // {value: 2, done: false}
//   it.next()
//   // {value: 3, done: false}
//   it.next();
//   // "v: foo"
//   // {value: 4, done: false}
//   it.next()
var step1 = function (func,value1) {
  return func(value1);
};
var step2 = function(value1,func,value2){
  return value1+func(value2);
};
var step3 = function(value2,func,value3){
  return value2+func(value3);
};
var step4 = function(value3,func,value4){
    return value3+func(value4);
    // return func(value4)+value3;
};
var step5 = function(value){
    return value+1;
}
// console.log(step1(function(value){
//   return (step5(value));
// },4))
// var reult = step1(function(value1){
//   return (step2(value1,function(value2){
//     return (step3(value2,function(value3){
//       return (step4(value3,function(value4){
//         return (step5(value4));
//                   },4));
//                 },3));
//               },2));
//             },1);
// var reult = Promise.resolve(step1)
// console.log('reult:'+reult);

// 定义一个主体对象
class Subject {
  constructor() {
    this.Observers = [];
  }
  add(observer) { //添加
    this.Observers.push(observer)
  }
  remove(observer) {//移除
    this.Observers.filter(item => item === observer);
  }
  notify() {
    this.Observers.forEach(item => {
      item.update();
    })
  }
}
//定义观察着对象
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`my name is:${this.name}`);
  }
}
 
//测试
// let sub = new Subject();
// let obs1 = new Observer('leaf111');
// let obs2 = new Observer('leaf222');
// sub.add(obs1);
// sub.add(obs2);
// sub.notify();

// function study(callback,params){
//   callback(params);
//   }
  
//   study(function(who){
//   console.log(who+"学习英语");
//   },'陈康');

Array.prototype.myfor = function(callback,thisArg){
  console.log(this);
  var len = this.length;
  thisArg = this;
  for(var i = 0; i < len; i++){
   // callback(this[i], i, this);
   callback.call(thisArg,this[i], i, this);
  }
}
 var myarr = [1,2,3,4,5];
 var myarr2 = [5,4,3,2,1];
//  myarr.myfor(function(val,index,a){
//     console.log(this);
//     console.log(val);
//  },myarr2);

var http = require('http');
http.get('http://test.hejundata.com/cqcxcyct/',function(res){
  console.log(res);
});
// function* gethtml(){
//   var url='http://test.hejundata.com/cqcxcyct/';
//   var result = yield http.get(url);
//   console.log(result);
// }
// var get = gethtml();
// var result = get.next();
// get.next(result);

//Thunk函数
// ES5版本
var Thunk = function(fn){
  return function (){
    var args = Array.prototype.slice.call(arguments);
    return function (callback){
      args.push(callback);
      return fn.apply(this, args);
    }
  };
};

// ES6版本
const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};