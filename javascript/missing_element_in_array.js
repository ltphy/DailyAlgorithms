// console.log('this is a debug message');

function missing_element_in_array(numbers) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = numbers.length;
    if(len===0) {
        return 1;
    }
    let numbers_map = new Array(len);
    for(let i = 0; i< len; i++) {
        if(numbers[i] - 1 < len) {
            numbers_map[numbers[i]-1] = true;
        }
    }
    let result = 0;
    for(let i = 0; i< len; i++) {
        if(!numbers_map[i]){
            result = i + 1;
            break;
        }
    }
    if(result === 0 ){
        result = len+1;

    }
    return result;
}
numbers = [1];
result = missing_element_in_array(numbers);

console.log(result);
