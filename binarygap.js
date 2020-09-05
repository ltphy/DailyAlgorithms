function maximalBinaryGap(N) {
    let maxGap = 0;
    let quotient = N;
    let count = 0;
    let start = false;
    let remainder;
    while(true) {
        remainder = quotient % 2;
        quotient = (quotient - remainder)/2 ;// 2;        

        //when start
        if(remainder === 1){
            if(count>0 && count > maxGap) {
                maxGap = count;
                start = false;
            }
            start = true;
            count = 0;
        } else {
            if(start) {
                count++;
            }
        }
        if(quotient ===0) {
            break;
        }
    }

    return maxGap;
};
let v = 9;
const value = maximalBinaryGap(v);
console.log(value);
