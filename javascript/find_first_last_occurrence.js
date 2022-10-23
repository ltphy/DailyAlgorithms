function binarySearch(arr, num){
    let result =-1;
    let mid = 0;
    let l = 0;
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

function findLastAndFirstIndexOcurrence(arr,num) {
    let start = -1;
    let stop = -1;
    if(arr[0]===num && arr[arr.length-1]===num) {
        return [0, arr.length-1];
    }
    if(arr[0] ===num) {
        start = 0;
    }
    else if(arr[arr.length-1]===num) {
        stop = arr.length-1;
    }
    let index = binarySearch(arr, num);
    start = index;
    stop = index;
    if(start!==0) {
        while(true) {
            if(arr[start-1] !== num) {
                break;
            }
            else {
                start -=1;
            }
        }
    }
    if(stop!==0) {
        while(true) {
            if(arr[stop+1] !== num) {
                break;
            }
            else {
                stop+=1;
            }
        }
    }
    
    return [start,stop];
}
let arr =  [1,3,3,5,7,8,9,9,9,15];
let arr1 = [100, 150, 150, 153];
let arr2 = [1,2,3,4,5,6,10];
let arr3 = [1,,1,1,1];
let num = 1;
const [start,stop] = findLastAndFirstIndexOcurrence(arr3,num);
console.log(start);
console.log(stop);
//find the first and its last index



