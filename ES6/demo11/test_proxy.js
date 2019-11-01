let obj = new Proxy({},{
    get:function(target,key,receiver){
        console.log(`getting ${key}!`);
        return Reflect.get(target,key,receiver)
    },
    set:function(target,key,value,receiver){
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    },
    has:function(target,key){
        console.log(`hasing ${key}`);
        return true;
    },
    deleteProperty:function(target,key){
        console.log(`deleteProperty ${key}`);
        return true;
    },
    ownKeys:function(target){
        console.log(`ownKeys ${target}`);
        return Object.getOwnPropertyNames(target);
    }
})

obj.count = 1;//set
obj.count;//get
'count' in obj;//has
delete obj.count;//deleteProperty
console.log(Object.keys(obj))//ownKeys

//链式调用
var pipe = (function () {
    return function (value) {
      var funcStack = [];
      var oproxy = new Proxy({} , {
        get : function (pipeObject, fnName) {
          if (fnName === 'get') {
            return funcStack.reduce(function (val, fn) {
              return fn(val);
            },value);
          }
          funcStack.push(global[fnName]);
          return oproxy;
        }
      });
  
      return oproxy;
    }
  }());
  
  var double = n => n * 2;
  var pow    = n => n * n;
  var reverseInt = n => n.toString().split("").reverse().join("") | 0;
  
  pipe(3).double.pow.reverseInt.get;



