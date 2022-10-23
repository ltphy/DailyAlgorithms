function testObject() {
    let a_object = {
        "name": "phy",
        "age": 18
    };
    a_object['dress'] = "10 duong";
    a_object[18] = "1";
    delete a_object['dress'];


    console.log(a_object);
    let a_map = new Map();
    a_map.set("name", "phy");
    a_map.set("age", 18);
    a_map.set("dress", "10duong");
    a_map.set(18, "1");
    a_map.delete("dress");
    console.log(a_map);

    a_map.forEach((value, key) => {
        console.log(a_map.get(key));
    });
    console.log("HEllo world");
    a = {};
    b = a;
    if (a === b) {
        console.log("EQUAL");
    }
    if (a === {}) {
        console.log("same EQUAL");
    }


}

function add_two(a, b) {
    return a + b;
}
const add_two_number = (a, b) => {
    return a + b;
}

function handleAdd(func, a, b) {
    return func(a, b);
}

let res = handleAdd(add_two, 2, 3);

const curryUnaryFunction = a => b => c => a + b + c;
res = curryUnaryFunction(2);
const impureInsert = (number, array) => {
    return array.push(number);
};
const pureInsert = (number, array) => {
    return array.concat([number]);
};

const destructoring_array = (number, array) => {
    return [...array,number];
};


let num = 4;
const arr = [];
let res_insert = destructoring_array(num, arr);

console.log(res_insert);
console.log(arr);


let numberArray = [];


push_value = numberArray.push(2);
console.log("dasf", push_value);

const add_number = (value)=>{
    var test_num = 3;
    return test_num + value;
};
let c = add_number(2);
console.log(c);
const a = 5;

function userDetails(username) {
    if(username) {
      console.log(salary); // undefined(due to hoisting)
    //   console.log(age); // error: age is not defined
      let age = 30;
      var salary = 10000;
    }
    console.log(salary); //10000 (accessible to due function scope)
    // console.log(age); //error: age is not defined(due to block scope)
}
username = "phy"

userDetails(username);

const memoizAddition = () => {
    let cache = {};
    const myFunc = (value) => {
        if (value in cache) {
            console.log('Fetching from cache');
            return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
        }
        else {
            console.log('Calculating result');
            let result = value + 20;
            cache[value] = result;
            return result;
        }
    }
    return myFunc;
}
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached
function Bike (model, color) {
    this.bike = model;
    this.color = color;
}
let bike = new Bike("model", "color");
console.log(bike.color);

function Welcome(name){
    let greetingInfo = (message) => {
     console.log(message+' '+name);
    }
  return greetingInfo;
  }
  let myFunction = Welcome('John');
  myFunction('Welcome '); //Output: Welcome John
  myFunction('Hello Mr.'); //output: Hello Mr.John
index = 4;
curr_index = 2;
arr_value = [1, 2, 3, 4, 5];
value = arr_value.splice(index, 1);
arr_value.splice(curr_index, 0, ...value);
console.log('arr', arr_value);

input_array = 'bar[foo([bar])[bar]]';
function handle_array(input_array) {
    let left_stacks = input_array.split('');
    let check = true;
    let stack = []
    console.log("stacks", left_stacks);
    for(let i = 0; i < input_array.length;i++) {
        let value = left_stacks[i];

        if(value === "[" || value === '{' || value === '('){
            console.log("LEFT", value);
            stack.push(value);
        }
        else {
            let left_value = stack.pop();
            if((left_value ==="[" && value!=="]") ||(left_value==="{" && value!=="}") || (left_value==="(" && value!==")" )) {
                check=false;
                break;
            }
            
        }
    }
    return check;
};


let result = handle_array(input_array);
console.log("result: ", result);
//test setTimeout

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
var boundName = unboundName.bind(person2);
var unboundNameArrow = person.getNameArrow;
var boundNameArrow = unboundNameArrow.bind(person);

console.log(person.getName(), person.getNameArrow(), unboundName(), unboundNameArrow(), boundName(2,18), boundNameArrow());
for (var i =0; i <3; i++) {
    setTimeout(((j)=>{
        console.log("OUT J", j);
        return function() {console.log("IN J",j); }
    })(i), 1000+i);
}


for(var i = 0; i<3;i++) {
    setTimeout(function(){
        console.log("I ",i);
    }, 1000+i);
}
console.log("value I ",i);
// for(let i = 0; i<3;i++) {
//     setTimeout(()=>{
//         console.log(i);
//     }, 1000+i);
// }
console.log("PERSON 3");
var name2 = "hi";
var person3 = {
    name2:"FOZ", 
    getName:function(age)
    {
        let inner_function = ()=>{
            return this;
        }
        return inner_function();
        
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    getNameArrow:() => {
        return this.name2;
    },

};

console.log(person3.getName(18));
const myObject = {
    myArrowFunction: null,
    myMethod: function () {
        console.log(this);
      this.myArrowFunction = () => { console.log(this) };
    }
  };

myObject.myMethod(); // this === myObject

myObject.myArrowFunction(); // this === myObject
  
  const myArrowFunction = myObject.myArrowFunction;
  myArrowFunction(); //
const myObject2 = {
    myMethod: () => {
      console.log("MYOBJECT 2", this);
    }
  };
myObject2.myMethod();
// var testShowTask = {
//     showTasks: function() {
//         var     _this = this
//         console.log("SHOW TASK", this);
//         this.tasks.forEach(function(task) {
//           alert(_this.name + " wants to " + task);
//         })
//     },
//     showTasks2: function() {
//         this.tasks.forEach(function(task) {
//           alert(this.name + " wants to " + task);
//         }.bind(this))
//     }

// };
// show = testShowTask.showTasks;
// show();
var value1 = 2;
let value2 = 4;
function HelloWorld() {
    console.log(this);
    console.log(value1);
    console.log("VALUE", value2);
}
const helloWorld = ()=>{
    console.log(this);
};
HelloWorld();
helloWorld();

// //pass arrow function into another function 

// // for loop
// console.log('START LOG TEXT');
// function logText() {
//     for (var i = 1; i <= 5; i++) {
//         (function(j) {
//             setTimeout(function(){
//                 console.log(j);
//             },100);
//             return j;
//         })(i);
//     }
// };

// logText();