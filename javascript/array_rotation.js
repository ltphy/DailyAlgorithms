
function arrayRotation(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    rotation_value = K % A.length;
    left_array = A.splice(A.length - rotation_value);

    console.log(left_array)
    return [...left_array,...A];
    
};
A = [1,1,2,3,5];
K = 7;
const result = arrayRotation(A, K);
console.log(result);
