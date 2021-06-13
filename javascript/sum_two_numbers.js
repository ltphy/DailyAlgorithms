//sum two numbers in array that equal with 
function binarySearch(arr, num, low){
    let result =-1;
    let mid = 0;
    let l = low;
    let h = arr.length - 1;
    while(l<=h){
        mid = Math.round((h+l)/2);
        let value = arr[mid];
        if(value === num){
            return mid;
        }
        else if(num<value) {
            h=mid-1;
        }
        else {
            l=mid+1;
        }
        
    }
    return -1;
}
function sumTwoNumbers(arr, num){
    let my_arr=[...arr];
    my_arr.sort((a,b)=>(a-b));
    console.log(my_arr);
    for(let i = 0;i<my_arr.length-1;i++) {
        let value = my_arr[i];
        let secondValue = num - value;
        let index = binarySearch(my_arr, secondValue, i+1);
        if(index!==-1) {
            return true;
        }
    }
    return false;

}
function sumTwoNumbersHash(arr, num) {
    let hash_arr = [];
    for(let i = 0; i<arr.length;i++){
        let value = arr[i];
        let left_over = value % arr.length;
        if(hash_arr[left_over]===undefined) {
            hash_arr[left_over] =[value];
        }
        else {
            console.log(hash_arr[left_over]);
            hash_arr[left_over] = [...hash_arr[left_over], value];
        }

    }
    console.log(hash_arr);

    for(let i = 0; i<arr.length;i++) {
        let value = num - arr[i];
        if(value !== arr[i]){
            if(hash_arr[value]!==undefined) {
                return true;
            }
        } else {
            let values = hash_arr[value];
            if(values.length>1){
                return true;
            }
        }
            
    }
    return false;
}
arr = [1,3,4,6,5,-2,4, -2];
num = 2;
result = sumTwoNumbersHash(arr, num);
console.log(result);
arr[7] =  8;

console.log(arr[6]);
