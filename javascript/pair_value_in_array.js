function PairValue(numbers) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numbers_map = new Map();
    numbers.forEach((value)=>{
        if(!numbers_map.has(value)){
            numbers_map.set(value,1);   
        } else {
            numbers_map.set(value,numbers_map.get(value)+1);   
        }
    });
    let result = 0;
    numbers_map.forEach((value,key)=>{
        if(value%2!==0) {                                                                                                                                                                                                                             
            result = key;
        }
    })
    return result;
}
