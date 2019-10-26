let arr = [1,2,3,4,5,5,3,2,4];
arr = [...new Set(arr)];
console.log(arr);
console.log(arr instanceof Array);

let s = new Set([1,2,3,5,5]);
console.log(s);
console.log(s instanceof Set);

