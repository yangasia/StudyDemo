module.paths.push('D:/nodejs/node_modules');
const fs = require('fs');
// cnpm i thunkify -g
const thunkify = require('thunkify');
const co = require('co');
const readFileThunk = thunkify(fs.readFile)

var gen = function* (){
    var r1 = yield readFileThunk('./test.txt');
    console.log(r1.toString());
    var r2 = yield readFileThunk('./test2.txt');
    console.log(r2.toString());
}
var g = gen();
var r1 = g.next();
r1.value(function(err, data){
    if(err) throw err;
    var r2 = g.next(data);
    r2.value(function(err,data){
        if(err) throw err;
        g.next(data);
    });
});

function run(fn){
    var gen = fn();
    function next(err, data){
        var result = gen.next(data);
        if(result.done) return;
        result.value(next);
    }
    next();
}
run(gen);
co(gen);