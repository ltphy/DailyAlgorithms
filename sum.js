function myFunction () {
    let value = 0;
    return {
        updateValue: function(increment){value+=increment},
        getValue: function(){return value}
    }
}
const newFunction = new myFunction();
newFunction.updateValue(5);
newFunction.updateValue(8);
console.log(typeof typeof myFunction().updateValue);
value = newFunction.getValue();
console.log(typeof  newFunction);
console.log(value);
var x = 
(() => {
    let x = 3, y;
    try {
      throw new Error();
    } catch (he) {
      (he = 1), (y = 2);

      console.log(x);
    }
    console.log(x);
    console.log(y);
  })();
  let person2 = { name: 'Lydia', new_value:{'age':5} };
  const members = [person2];
//   person2['new_value'] = {'age':10};
  person2['name'] = "phy";
//   person2 = null;
  console.log(members);
  const numbers = [1, 2, 3, 4, 5];
  const [y,...c] = numbers;
  
  console.log(y);
  console.log(c);
  const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
  const data = JSON.stringify(settings, (k, value)=>{
      console.log(k); return k + "4";
    });
  console.log(data);
  const randomValue = 21;

  function getInfo() {
    console.log(typeof randomValue);
  }
  
  getInfo();
  const name = 'Lydia Hallie';

  console.log(typeof name === 'object');
  console.log(typeof name === 'string');
let arr = [];
// arr.push(10);
console.log(arr);

arr[10]  = undefined;
console.log(arr);

console.log(arr.length);
let stringv = "asdfdsa";
console.log(stringv[5]);
stringv[1] = 'a';
console.log(stringv);
console.log(stringv[1]);
