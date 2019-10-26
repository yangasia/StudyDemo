# Set和Map数据结构
[教程](http://es6.ruanyifeng.com/#docs/set-map)
#### 1. Set
***
+ Set 类似数组，成员具有唯一性，本身是构造函数，用来生成Set数据结构  NaN也是唯一的，对象总是不相等，引用类型比较的是内存地址
```javascript
//数组去重或字符去重
let arr = [1,2,3,4,5,5,3,2,4];
arr = [...new Set(arr)];
console.log(arr)
```
##### Set属性与方法
1. Set.prototype.constructor  Set构造函数，Set（）
2. Set.prototype.size Set实列的成员总数
3. Set.prototype.add() 添加成员 返回本身
4. Set.prototype.delete() 删除某个成员 返回布尔值表示删除与否
5. Set.prototype.has() 判断存在与否 返回布尔值
6. Set.prototype.clear() 清除所有成员，没有返回值
7. Set.prototype.keys()：返回键名的遍历器
8. Set.prototype.values()：返回键值的遍历器
9. Set.prototype.entries()：返回键值对的遍历器
10. Set.prototype.forEach()：使用回调函数遍历每个成员  
set的遍历顺序就是插入顺序
***
#### 2. Map
***
+ Map弥补对象的键值不能是变量的缺点，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应
+ 其他与Set类似
***