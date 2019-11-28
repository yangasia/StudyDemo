function timeout(ms){
    console.log('in');
    return
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}
async function asyncPrint(value,ms){
    await timeout(ms);
    console.log('async');
    await timeout(ms);
    console.log('async1');
}
// console.log(asyncPrint('hello world', 1000).toString());
// console.log('out');
async function f(){
    return 'async return';
}

f().then(v => console.log(v));

function sleep(interval){
    return new Promise(resolve=>{
        setTimeout(resolve, interval)
    })
}

async function one2FiveInAsync(){
    for(let i = 1;i<=5;i++){
        console.log(i);
        await sleep(1000);
        //执行需要等待时间的代码
    }
}
one2FiveInAsync();
console.log('等待以后');