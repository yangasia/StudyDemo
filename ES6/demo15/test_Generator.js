function* helloWorldGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();
// console.log(hw);
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
function* gen(){
    let a = 0;
    console.log(a);
    yield a = 123 + 456;
    return a;
} 
console.log(gen().next())
console.log(gen().next())
