global.Gprint = function (...text){
    console.log(...text);
    return text;
}
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y; 
    }
    toString(){
        return '('+this.x+','+this.y+')';
    }
}
class ColorPoint extends Point {
    constructor(x, y, color){
        super(x, y);
        this.color = color;
    }
    toString(){
        return this.color+' '+super.toString();
    }
}
// Gprint((new ColorPoint(1,2,'red')).toString());
// console.log(typeof Point);
// console.log(Point===Point.prototype.constructor);
// let p = new Point(1,2);
// let p2 = new Point(3,4);
// console.log(p.toString());
// console.log(p2.toString());

class Logger {
    constructor(){
        // Gprint(this);
        // this.printName = this.printName.bind(this);
    }
    printName = (name = 'me') => this.print(`Hello ${name}`);
    print(text){
        Gprint(text);
    }
}
const logger = new Logger();
const { printName } = logger;
// printName()
class Foo {
    static classMethod() {
        return Gprint('hello');
    }
}

class Bar extends Foo {
    static classMethod() {
        return Gprint(super.classMethod() + ', too');
    }
}
// Foo.classMethod() // "hello"
// Bar.classMethod() // "hello, too"
// Gprint('test:','saaas')

// class test{
//     _count = 0;
//     constructor(){
//         Gprint(new.target);
//         this.count = 0;
//     }
//     increment(){
//         this.count++;
//         this._count++;
//     }
// }
// // let T = new test();
// // T.increment();
// // Gprint(test)

// class A {
//     _p1 = 3;
//     constructor(){
//         this._p = 1;
//     }
//     p(){
//         return 2;
//     }
//     static myAfun() {
//         return 4;
//     }
// }
// class B extends A{
//     constructor(){
//         super();
//         Gprint(this._p1);
//         Gprint(super._p1);
//         Gprint(super.p());
//     }
//     m(){
//         Gprint()
//     }
//     static myVfun(){
//         Gprint(super.myAfun());
//     }
// }
// let b = new B();
// Gprint(B.__proto__);
class A {
}
class B extends A {
}
let a = new A()
let b = new B();
// Gprint(A.prototype);
// Gprint(B.prototype);
Gprint(b.prototype);

// console.log(b.__proto__.__proto__ === a.__proto__)//ture
// console.log(b.__proto__.__proto__ === A.prototype)
