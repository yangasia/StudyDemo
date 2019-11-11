function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms,'done');
    });
}
timeout(1000).then((value)=>{
    console.log(value);
})

let promise = new Promise(function(resolve,reject){
    console.log('Promise');
    reject();
});

promise.then(function(){//只有同步脚本执行完了。才会执行说有先打印hi再打印resolve
    console.log('resolve');
},function(){
    console.log('reject');
})
console.log('hi!');

// resolve函数的参数是一个Promise对象时
// const p1 = new Promise(function(resolve, reject){
//     setTimeout(()=>reject(new Error('fail')), 3000);
// });
// const p2 = new Promise(function(resolve,reject){
//     setTimeout(()=>resolve(p1),1000);
// })
// p2.then(result=>console.log(result)).catch(error=>console.log(error))
// console.log(Promise.reject(3).finally(() => {}));
