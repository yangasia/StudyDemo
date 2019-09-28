// var a = [];
// for (let i = 0; i < 10; i++ ){
//     a[i]=function(){
//         console.log(i);
//     }
// }
// a[6]();

// for (let i = 0;i<3;i++){
//     let i = 'abc';
//     console.log(i);
    
// }

// typeof x;
// let x;

// function bar(x=y,y=2) {
//     return [x,y]
// }

// console.log(bar())

// function func() {
//     var  a= 10;
//     let a =1;
// }
// func()

function f() {
    console.log("out");
}
(function () {
    if(false){
        function f() {
            console.log("in");
        }
    }
    f();
}())