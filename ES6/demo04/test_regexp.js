// var regex1 = new RegExp('xyz', 'i');
// var regex2 = /xyz/i;
// console.log(regex1 instanceof RegExp);
function mylog(a,n) {  
    console.log(Math.log(n));
    console.log(Math.log(a));
    
    
    return Math.log(n)/Math.log(a);
}
console.log(mylog(-2,4));