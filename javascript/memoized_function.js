
// import * as userInfo from './expor_file.js';
import haha from './expor_file.js';
console.log(haha);
console.log(haha());
const memoizedValue = new Map();
const updateValue = (value)=> {
    return value *3;
};
const memoizedFunction = (memoFunction, params) => {
  const key = JSON.stringify(params);
  const value = memoizedValue.get(key);
  if(value) {
      return value;
  
  } else {
      const addedValue = memoFunction(params);
      memoizedValue.set(key, addedValue);
      return addedValue;
  }
};
console.log(memoizedFunction);
// console.log(memoizedFunction(updateValue, 1));
// console.log(memoizedFunction(updateValue, 2));
// console.log(memoizedFunction(updateValue, 3));
// console.log(memoizedFunction(updateValue, 3));


// const fibonacci = (fiboNumber)=>{
//     if(fiboNumber === 0 || fiboNumber ===1) {
//         return fiboNumber;
//     }
//     return fibonacci(fiboNumber-2) + fibonacci(fiboNumber-1);
// };

// const fibonacci2 = (fiboNumber)=>{
//     if(fiboNumber === 0 || fiboNumber ===1) {
//         return fiboNumber;
//     }
//     return memoizedFunction(fibonacci2, fiboNumber-2) + memoizedFunction(fibonacci2, fiboNumber-1);
// };

// const start = new Date();
// const fibNumber = fibonacci2(50);
// const end = new Date();
// console.log('saved memoized', (end.getTime()-start.getTime())/1000);
// console.log(fibNumber);


// const start1 = new Date();
// const fibNumber2 = fibonacci(50);
// const end2 = new Date();
// console.log('fib', (end2.getTime()-start1.getTime())/1000);
// console.log(fibNumber2);

const name1 = "phy";
const age = "city";
// console.log(`${name1} ${age} ${city}`);

function Dog (name) {
    this.name = name;
    this.bark = function(){
        console.log('bark');
        console.log(this);
    };
    this.bang = () =>{
        console.log(this);
    };
}
console.log('first', Dog);
const dog = new Dog('corgi');
console.log(dog.bark());
console.log(dog.bang());
Dog.sayHello = function() {
  console.log('sayHello');
};

const dog1 = new Dog('chihua');

// console.log(Dog1);
// console.log(dog);
// console.log(dog1);
// console.log(Dog);
// (function timer() {
//     for (var i = 0; i <= 5; i++) {
//         setTimeout(function clog() { console.log(i); }, i * 1000);
//         console.log('varOuter');
//       (function (i) {
//         console.log('varInner');
//         setTimeout(function clog() { console.log(i); }, i * 1000);
//       }(i));
//     }
//   })();

function MemoizedFunctionTemp (){
    console.log('this', this);
    this.name = 'phy';
    this.memoizedFunction1 = ()=>{
        console.log('function1', this.name);
    };
    
    this.memoizedFunction2  = function () {
        console.log('function2', this.name);
        this.memoizedFunction3 = function() {
            console.log('function3', this.name);
        }
    };
};

const memoizedFunction1 = new MemoizedFunctionTemp();
memoizedFunction1.memoizedFunction1();
memoizedFunction1.memoizedFunction2();

const nestedMemoized = new memoizedFunction1.memoizedFunction2();
nestedMemoized.memoizedFunction3();


class Dog1 {
    constructor(name) {
        this.name = name;
    }
    bark() {
        return 'Woof';
    }
}
class Chihuahua extends Dog {
    constructor(name) {
        super(name);
    }
    smallBark() {
        return "Small woof!";
    }
}
console.log(Chihuahua);
console.log(Dog1);

