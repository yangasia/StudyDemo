let s = Symbol();
// let s1 = Symbol('a');
// console.log(s1.toString());
// console.log(s1.description);
// console.log(s === s1);

let mySymbol = Symbol();

// let a = {};
// a[mySymbol] = 'hello';

// let b = {
//     [mySymbol]:'hello'
// };

// let c = {};
// Object.defineProperty(c, mySymbol, {value:'hello'});
// console.log(a[mySymbol]);
// console.log(b[mySymbol]);
// console.log(c[mySymbol]);
// console.log(s);

// class MyClass {
//     [Symbol.hasInstance](foo) {
//       return foo instanceof Array;
//     }
//   }
  
// console.log([1, 2, 3] instanceof new MyClass());

class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
  }
  class MyArray2 extends Array {
  }
  
  const a = new MyArray();
  const b = a.map(x => x);
  const c = new MyArray2();
  const d = c.map(x => x);
  
console.log(b instanceof MyArray); // false
console.log(b instanceof Array) // true
console.log(d instanceof MyArray2) // true
console.log(d instanceof Array) // false