// function myName() {
//     const myObject = {
//         name:"phy",
//         sayHello:  ()=>{
//             console.log(this.name);
//         },
//         //iife
//         timeOut: function(i) {
//             setTimeout((function(i){
//                 console.log(this.name);
//             })(i),100);
//         }
//     };
// }

function myName() {
    this.age = 'phy';
    this.sayHello =  function(){
        console.log(this.age);
    };
}

// function setTimeout(callback, delay) {
//     callback();
// }
// setTimeout(myObject.SayHello, 100);
// //myObject.timeOut(3);
// myObject.sayHello();
// const sayHelo = myObject.sayHello;

const thisName = new myName();
const newName = thisName.sayHello.bind((myName()));
newName();


function Car() {
    this.make = 'Lamborghini';
}

const myCar = new Car();
console.log(myCar.make);