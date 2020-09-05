var name2 = "FOO";
var person = {
    name2:"BAR", 
    getName:function(){
        return this.name2;
    },
    getNameArrow:function(){
        return this.name2;
    },

};
var value = person.getName
console.log(value);
var person2 = {
    name2:"FOZ", 
    getName:function(age)
    {
        console.log()
        return this.name2+" "+ age;
    },
    getNameArrow:function(){
        return this.name2;
    },

};

var unboundName = person2.getName;
var boundName = unboundName.bind(person2,18);
var unboundNameArrow = person.getNameArrow;
var boundNameArrow = unboundNameArrow.bind(person);

console.log(person.getName(), person.getNameArrow(), unboundName(), unboundNameArrow(), boundName(), boundNameArrow());
var content = "NotOk";
var myButton = {
    content: 'OK',
    click() {
      console.log(this.content + ' clicked');
    }
};

myButton.click();

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton
// Example showing binding some parameters
var sum = function(a, b) {
    return a + b;
  };
  
var bunny = {
name: 'Usagi',
tasks: ['transform', 'eat cake', 'blow kisses'],
showTasks: function(walk) {

    this.tasks.forEach((task) =>{
        console.log(this);
        console.log(this.name + " wants to " + task + walk);
    });
}};


bunny.showTasks("walk");


const myObject = { 
    myMethod: () => { console.log(this); 
    } 
};
myObject.myMethod();
var adder = {
    base: 1,
  
    add: function(a) {
      var f = v => v + this.base;
      return f(a);
    },
  
    addThruCall: function(a) {
      var f = v => v + this.base + a;
      return f;

    }
  };
method = adder.addThruCall();
result = method.call(adder,8);
console.log(result);
