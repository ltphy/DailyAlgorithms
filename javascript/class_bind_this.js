class Foo {
    constructor(name){
      this.name = name
    }
    
    display=()=>{
      console.log(this.name);
    }
  }
  
  var foo = new Foo('Saurabh');
  foo.display(); // Saurabh
  
  // The assignment operation below simulates loss of context 
  // similar to passing the handler as a callback in the actual 
  // React Component
  var display = foo.display; 
  display(); // TypeError: this is undefined
const Foo2 ={
    name:"phy",
    display: function(){ return ()=>{
        console.log(this.name);
    }},
}

// const newFoo = new Foo2();
// console.log(newFoo.name);
Foo2.display()();

HellowWorld();
function HellowWorld() {
    console.log("HELLO WORLD");
}
function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
// let speak = obj.speak;
console.log(obj.speak()); // global object (in non–strict mode)

// let eat = Animal.eat;
// obj.eat(); // global object (in non-strict mode)
