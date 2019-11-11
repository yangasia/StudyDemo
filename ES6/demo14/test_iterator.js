var it = makeIterator(['a', 'b']);

// console.log(it);
// console.log(it.next()) // { value: "a", done: false }
// console.log(it.next()) // { value: "b", done: false }
// console.log(it.next()) // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}

var arr = ['a','b','c'];
var str = 'abc';
var obj = {
    a:'a1',
    b:'b2',
    c:'c1',
};
for(let i of obj){
    console.log(i);
}