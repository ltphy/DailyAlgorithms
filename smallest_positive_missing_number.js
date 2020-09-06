var firstMissingPositive = function(nums) {
    let arr =[...nums].sort(function(a,b){return a-b});
    console.log(arr)
    let missingPositive =1;
    let previousNumber = 1;
    for (let i = 0; i< arr.length; i++) {
        let value = arr[i];
        if(value<=0) {
            continue;
        }
        if(value>0){
            if(value===previousNumber) {
                missingPositive = value + 1;
                continue;
            }
            else{
                previousNumber = value;
                console.log("Preivous number: ",previousNumber);
                if(missingPositive<value) {
                    break;
                }
                missingPositive+=1;
            }
        }
    }
    return missingPositive;
};
var firstMissingPositiveHash = function(nums) {
    let missingPositive =1;
    let numsMap = new Map();
    let smallestValue = Infinity;
    nums.forEach((value)=>{
        if(value>0) {
            numsMap.set(value,true);
            if(value<smallestValue) {
                smallestValue = value;
            }
        }
        
    });
    
    
    if(smallestValue === missingPositive) {
        while(true){
            missingPositive +=1;
            if(!numsMap.has(missingPositive)) {
                break;
            }
        }
    }

   return missingPositive;
};

function firstMissingPositiveCount (arr) {
    const countNegative = (myArr)=>{
        let j = 0 ;
        for(let i = 0; i< myArr.length; i++) {
            if( myArr[i] <= 0 ) {
                //swap value 
                [myArr[i],myArr[j]] = [myArr[j],myArr[i]];  
                j++;
            }       
        }
        return j;
    };

    let positive_idx = countNegative(arr);
    slice_array = arr.slice(positive_idx);
    console.log(slice_array)
    let idx;
    //mean it consider the array as hash table 
    // as we get the value => 
    for(let i = 0; i < slice_array.length; i++) {
        if(Math.abs(slice_array[i]) - 1 < slice_array.length && slice_array[Math.abs(slice_array[i]) - 1] > 0) {            
            slice_array[Math.abs(slice_array[i])-1] = - slice_array[Math.abs(slice_array[i])-1] ;
        }
        console.log(slice_array);
    }
    for (let i = 0; i <slice_array.length; i++) {
        if(slice_array[i]>0) {
            return i + 1;
        }
    }
    return slice_array.length  + 1;
};

let value = firstMissingPositiveCount([5,2,1,4,3]);
console.log(value);
