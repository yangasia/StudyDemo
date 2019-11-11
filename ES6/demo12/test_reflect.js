//重要实现。观察者模式的实现

const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer => observer());
    return result;
}

const person = observable({
    name: '张三',
    age: 20
  });
  
function print() {
    console.log(`${person.name}, ${person.age}`)
}

observe(print);

person.name = '李四';
person.age = 27;
