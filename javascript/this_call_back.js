const myObject = {
    name:"phy",
    SayHello: () =>{
        console.log(this.name);
    },
    //iife
    timeOut: function(i) {
        setTimeout((function(i){
            console.log(this.name);
        })(i),100);
    }
};

// function setTimeout(callback, delay) {
//     callback();
// }
// setTimeout(myObject.SayHello, 100);
// //myObject.timeOut(3);
const sayHelo = myObject.bind(myObject);
sayHelo();