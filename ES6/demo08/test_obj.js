let obj = {
    foo:123
};

console.log(Object.getOwnPropertyDescriptor(obj,'foo'))
let text = 'globale';
function func(){
    console.log(this.text);
    // return ()=>console.log(this.text);
}
let obj1 = {
    text:'obj1',
    func
}
let obj2 = {
    text:'obj2',
    func
}
// obj1.func();
// obj2.func();
// func();
var arr = 'abc';
let obj3 = Object.assign({},arr);
// console.log(obj3);
// console.log(Object.assign(obj,obj3));
// console.log(obj);

const source = {
    foo() { return 1 }
  };
  const target = {};
  
  Object.assign(target, source)

// console.log(target);

// console.log(Object.getOwnPropertyDescriptors(arr));
// arr[1] ='g';
// console.log(arr);

let obj4 = {
    a:1,
    b:2,
    c:3,
    [Symbol()]:'111'
};
let {keys, values, entries} = obj4
// console.log(keys);
// console.log(values);
// console.log(entries);
// console.log(Object.getOwnPropertyDescriptor(Object,'keys'));
console.log(Object.values({ [Symbol()]: 123, foo: 'abc' }));
console.log('\nentries:\n', Object.entries(obj4))