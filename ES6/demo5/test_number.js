console.log(Number.EPSILON === Math.pow(2,-52));
console.log(Math.pow(2,-52));
console.log(Math.pow(2,-52).toFixed(20));

console.log(0.1+0.2==0.3);

function withinErrorMargin (left, right) {//误差接受函数
    return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}

console.log(withinErrorMargin(0.1+0.2,0.3));
console.log('////////////////////////////////////////////////');
console.log(9007199254740992==9007199254740993);
console.log(Number.MAX_SAFE_INTEGER);
