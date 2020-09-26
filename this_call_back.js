const myObject = {
    name:"phy",
    SayHello: function() {
        console.log(this);
    },
    //iife
    timeOut: function() {
        setTimeout((function(i){
            console.log(this.name);
        })(i),100);
    }
};

function setTimeout(callback, delay) {
    callback();
}
setTimeout(myObject.SayHello, 100);
myObject.timeOut(3);
