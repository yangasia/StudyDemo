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
printName()
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

