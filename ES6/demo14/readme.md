# Iterator 和 for...of 循环
[教程](http://es6.ruanyifeng.com/#docs/iterator)

主要讲数据结构的遍历的相关问题

>for...of调用对象Iterator的接口  
Object没有部署Iterator接口  
遍历Object 应该使用for...in  

>对于数组而言  
for...in 遍历的是key  
for...of 遍历value  
 
```javascript
//部署Iterator接口的方式
{
    [Symbol.iterator]:function(){
        return value
    }
}
```

Iterator接口部署情况  
+ Array
+ Map
+ Set
+ String
+ TypedArray
+ 函数的 arguments 对象
+ NodeList 对象