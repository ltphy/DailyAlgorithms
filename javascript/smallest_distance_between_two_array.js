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
arr = [-2,-4,0,3,2,5,6];
arr_distance = [-4,-6,4,9];
arr.sort();
let distance = Infinity;
let value1, value2;
for(let i = 0; i<arr_distance.length;i++) {
    let result_idx = binarySearch(arr, arr_distance[i]);

    let cur_distance =  Math.abs(arr[result_idx] -  arr_distance[i]);
    if(cur_distance < distance) {
        distance = cur_distance;
        value1 = arr[result_idx];
        value2 = arr_distance[i];
    }
}
console.log(value1);
console.log(value2);
