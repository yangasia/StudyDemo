// function log(x, y) {
//     y = y || 'World';
//     console.log(x, y);
//   }
//   log('hello',false)

// console.log(this);
// function func() { 
//     console.log(this);

//  }
//  func();

function foo() {
    var id=12;
    setTimeout(() => {
      console.log('id:', this.id);
    }, 100);
  }
  
  var id = 21;
  
  foo.call({ id: 42 });
  foo();