const foo = async()=> {
    //  Promise.reject('error foo');
    try {
        throw('error foo');
    }catch(e) {
        console.log('error')
    }
    
}

// no promise return => auto resolve => not return a promise to resolve
const bar = async()=> {
    try {
        await Promise.reject('bar');    
    } catch(e) {
        return e;
    }
   
}

const bark = async()=> {
    try {
        return Promise.resolve('bark');
    } catch (e) {
        console.log('bark');
        throw(Error(e));
    }
}

const balance = async()=> {
    try {
        new Promise((resolve, reject)=> {
            setTimeout(()=>{
                resolve('error balance');
            }, 1000);
        })
    } catch (e) {
        
        console.log('IN');
    }
}  

async function waitAndMaybeReject() {
    // Wait one second
    console.log('waiting...');
    console.log('waiting...');
    console.log('waiting...');

    await new Promise(r => setTimeout(r, 2000));
    console.log('finish');
    // Toss a coin
    const isHeads = Boolean(Math.round(Math.random()));
    console.log('here', isHeads);
    if (isHeads) return 'yay';
    throw Error('Boo!');
}

// (async () =>{
// try {
//     const result = await Promise.all([foo(), bar(), bark(), balance()]);
//     console.log('result');
//     console.log(result);
// } catch (e) {
//     console.log(e);
//     console.log('OUT');
// }
// })();

async function wrapperWaitAndMaybeReject () {
    try {
        return await waitAndMaybeReject();
    } catch (error) {
        console.log('error wrapper', error);
    }
     
}

(async () =>{
    try {
        const result = await wrapperWaitAndMaybeReject();
        console.log('result', result);
      }
      catch (e) {
        return 'caught';
      } 
    })();

const goToSchool = (num, num2=num)=>{
    return num + num2;
};

(()=>{
    console.log('helo');
    const a = goToSchool(5);
    console.log('goToSchool', a);
    console.log('tpe', typeof goToSchool);
})();

const person = {
    name: 'Lydia',
    age: 21,
  };
  
for (const [x, y] in Object.entries(person)) {
    console.log(x, y);
}

class Person {
    constructor () {
        this.name = 'phy';
        this.printHello2 = this.printHello2.bind(this);
    }

    printHello () {
        // undefined
        console.log(this.name);
    }
    printHello2  = () => {
        // name
        console.log(this.name);    
    }
}

const person1 = new Person();
person1.printHello();
person1.printHello2();

const info = {
    [Symbol('a')]: 'b',
  };
  
  console.log(info);
  console.log(Object.keys(info));

const promiseFunction = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('hello');
        }, 5000);
    } );
}

(async ()=> {
    const result = await promiseFunction();
    console.log('result');
    console.log(result);
})();


const returnCallback = ()=>{
    return (x => x);
};

console.log((x => x)('Ilove'));

let config = {
    name: 'phy',
    value: function (){
        console.log(this.name);
    },
    function2 (){
        console.log('fucntion2');
        this.value();
    
    },
    // alert: setInterval(() => {
    //     console.log('Alert!');
    //   }, 1000)

};
// config.function2();

var obj = {
    count : 10,
    doSomethingLater : function(){
        // The traditional function binds "this" to the "obj" context.
        setTimeout( () =>{
            // Since the arrow function doesn't have its own binding and
            // setTimeout (as a function call) doesn't create a binding
            // itself, the "obj" context of the traditional function will
            // be used within.
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

obj.doSomethingLater();
const myMap = new Map();
const myFunc = () => 'greeting';

myMap.set(myFunc, 'Hello world!');

//1
console.log(1);
console.log(myMap.get('greeting'));
//2
console.log(myMap.get(myFunc));
//3
myMap.get(() => 'greeting');
function sumValues(x, y, z) {
    return x + y + z;
  }

  console.log(sumValues([1, 2, 3]));

console.log('lange');
const config2 = {
languages: [],
set language(lang) {
    return this.languages.push(lang);

},
get language () {return this.languages}
};

config2.language = 'phy';
console.log(config2.languages);
console.log(config2.language);

function add (x){  
    return function(y){
        return function(z) {
    console.log(x, y, z);
    return x + y + z;
    };
  };
};
  
  add(4)(5)(6);

  const spookyItems = ['👻', '🎃', '🕸'];
const objSkull = {
    item: '💀'
};


({item: spookyItems[3]} = objSkull);
const myPromise = Promise.resolve(Promise.resolve('Promise'));

function funcOne() {
  setTimeout(() => console.log('Timeout 1!'), 0);
  myPromise.then(res => res).then(res => console.log(`${res} 1!`));
  console.log('Last line 1!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`)
  myPromise.then(res => res).then(res => console.log(`${res} 3!`));
  setTimeout(() => console.log('Timeout 2!'), 0);
  console.log('Last line 2!');
}

funcOne();
funcTwo();


const a = {
    name: 'phy'
};
delete a.name;
console.log('a', a);
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
  get Num() {
   return this.#number; 
  }
  set Num(num) {
      this.#number = num;
  }
}

const counter = new Counter()
counter.Num = 1000;
console.log(counter.Num);
const teams = [
    { name: 'Team 1', members: ['Paul', 'Lisa'] },
    { name: 'Team 2', members: ['Laura', 'Tim'] },
  ];
  
  function* getMembers(members) {
    for (let i = 0; i < members.length; i++) {
      yield members[i];
    }
  }
  
  function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++) {
      // ✨ SOMETHING IS MISSING HERE ✨
      yield  getMembers(teams[i].members);
    }
  }
  
  const obj5 = getTeams(teams);
  console.log(JSON.stringify(obj5.next())); // { value: "Paul", done: false }
  console.log(JSON.stringify(obj5.next())); // { value: "Lisa", done: false }

  function greeting () {
      console.log( 'Hello');
  }
  function response() {
      setTimeout(()=>{
          console.log( 'HelloW');
      }, 1000);
  }

  greeting();
  response();



