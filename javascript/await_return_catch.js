// async function waitAndMayBeReject () {
//     // Wait one second
//     await new Promise(r => setTimeout(r, 1000));
//     // Toss a coin
//     const isHeads = Boolean(Math.round(Math.random()));

//     if (isHeads) return 'yay';
//     throw Error('Boo!');
// };

// function intermediatery () {
//     try { 
//         return waitAndMayBeReject();
//     } catch(error) {
//         console.log('error intermediatery');

//     }
    
// }

// async function foo() {
//     try {
//         const result = await intermediatery();
//         console.log(result);
//         return result;
//     }
//     catch (e) {
//         console.log('error', e);
//         return 'caught';
//     }
// }

// foo();

  // 'OUT'

const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21, enumerable: true, writable: true });


person['age'] = 30;
person['age']
console.log(person['age']);
console.log(Object.keys(person));

const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, (key, value)=> {
  console.log(key);
  if(typeof value === 'number') {
    return value + 2;
  }
  if(typeof value === 'string')
  {
    return value + 'phy';
  }
  return value;
});

console.log(data);

[1, 2, 3, 4].reduce((x, y) => console.log(x, y), 5);

// 5 1 and undefine 2 
const value = {number: 2};

const multiply = (x = {...value}) => {
  console.log(x.number*=2);
}

multiply();
multiply(value);
multiply(value);
class Dog {
  constructor(name) {
    this.name = name;
  }

}

function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  console.log(answer);
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(game.next().value); // Do you love JavaScript?
console.log(game.next('Yes').value); // J

console.log(`C:\\Documents\\Projects\\"t\\table.html`);


async function getData() {
  return Promise.resolve('I made it!');
}
// a simple function to add something
const add = (n) => (n + 10);
add(9);
// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  const name = 'phy';
  return function (n) {
    console.log('name', name);
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached