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
  
  console.log(it.next())
  console.log(it.next())
  console.log(it.next())
  console.log(it.next())
  // {value: 1, done: false}
//   it.next()
//   // {value: 2, done: false}
//   it.next()
//   // {value: 3, done: false}
//   it.next();
//   // "v: foo"
//   // {value: 4, done: false}
//   it.next()