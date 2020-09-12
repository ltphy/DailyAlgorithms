function binarySearch(arr, number) {
    h = arr.length - 1;
    l = 0;
    let mid;
    let smallest_distance = Infinity;
    let result;
    while(l<=h) {
        mid = Math.round((h+l)/2);
        let curr_distance = Math.abs(number - arr[mid]);
        if(curr_distance < smallest_distance) {
            smallest_distance = curr_distance;
            result = mid;
        }
        if(arr[mid] === number) {
            break;
        }
        else if(arr[mid]>number) {
            h = mid - 1;
        }
        else if(arr[mid]<number) {
            l = mid + 1;
        }
    }
    return result;
}
//the different between the smallest distance and smallest sum is distance can be easily
//found by the nearst number. However, with sum of two number smallest. There might be case of negative and positive number
// binary search with whole array is O(logn + m).
// the number should be negative and nearly matched that number. 
arr = [0,3,2,5,6];
arr_distance = [9,4,5,6];
arr.sort();
let distance = Infinity;
let value1, value2;
for(let i = 0; i<arr_distance.length;i++) {
    let current_value = -arr_distance[i];
    let result_idx = binarySearch(arr, current_value);
    let cur_sum =  Math.abs(arr[result_idx] + current_value);
    if(cur_sum < distance) {
        distance = cur_sum;
        value1 = arr[result_idx];
        value2 = arr_distance[i];
    }
}
console.log(value1);
console.log(value2);
