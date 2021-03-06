//ES6代码
input.map(item => item + 1);
//ES5代码
input.map(function(item){
    return item + 1;
});

const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);