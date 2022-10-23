
//pass arrow function into another function 

// for loop
console.log('START LOG TEXT');
// function logText() {

// };
for (var i = 1; i <= 5; i++) {
    (function(j) {
        console.log('call', j);
        setTimeout(function(){
            console.log(j);
        },100);
        return j;
    })(i);
}
const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
// console.log(shape.perimeter());
const functionDia = shape.diameter;
console.log(functionDia());
class Car {
    constructor() {
      // Bind sayBye but not sayHi to show the difference
    //   this.sayBye = this.sayBye.bind(this);
    }
    sayHi() {
      console.log(`Hello from ${this.name}`);
    }
    sayBye() {
      console.log(`Bye from ${this.name}`);
    }
    get name() {
      return 'Ferrari';
    }
  }
  
  class Bird {
    get name() {
      return 'Tweety';
    }
  }
  
  const car = new Car();
  const bird = new Bird();
  
  // The value of 'this' in methods depends on their caller
  car.sayHi(); // Hello from F


  function bark() {
    console.log('Woof!');
  }
  console.log(bark);
  bark.animal = 'dog';
  console.log(bark);
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.getFunctioName = () => {
  return `haha${this.firstName} ${this.lastName}`;
  };
const member = new Person('Lydia', 'Hallie');
console.log('first name', this.lastName);
console.log(Person.getFunctioName());

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log('prototype');
// console.log(member.toString());
console.log(Object.getPrototypeOf(member));

function Ninja(){
  this.swung = true;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

Ninja.prototype.swing = function(){
  this.swung = false;
  return this;
};

console.log(!ninjaA.swing().swung);
console.log(!ninjaB.swing().swung);

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;

function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
Number.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 2;

console.log(name.giveLydiaPizza());

const b = {key: 'b'};
console.log(b.toString());
console.log(JSON.stringify(b));
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.all([firstPromise, secondPromise]).then(res => console.log(res));

let person2 = { name: 'Lydia' };
const members = [person2];
person2 = null;

console.log(members);

function getInfo(member, year) {

  member = null;
  // member.name = 'Lydia';
  year = '1998';
}

let person4 = { name: 'Sarah' };
const myPerson = person4;
person4 = null;
const birthYear = '1997';

// getInfo(person4, birthYear);
console.log(myPerson)
console.log(person4, birthYear);
function grandfather() {
  var name = 'Hammad';
  // 'likes' is not accessible here
  console.log(this);
  function parent() {
      // 'name' is accessible here
      // 'likes' is not accessible here
      console.log(this);
      function child() {
          // Innermost level of the scope chain
          // 'name' is also accessible here
          var likes = 'Coding';
          console.log(this);
      }
  }
}

grandfather.prototype.parent();