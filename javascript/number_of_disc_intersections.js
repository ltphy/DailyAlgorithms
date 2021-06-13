function isIntersect(right1, left2) {
    if(right1 - left2 >= 0) {
        return true;
    }
    return false;
}

function NumberOfDiscIntersections(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    const maximum = 10000000;
    for (let i = 0; i< A.length; i++) {
        let right1 = i + A[i];
        for(let j = i+1; j<A.length; j++) {
            let left2 = j - A[j];
            if(isIntersect(right1,left2)) {
                count++;
                if(count>maximum){
                    count = -1;
                    break;
                }
            }
        }
        
    }
    return count;
    
}
function NumberOfDiscIntersectionsSorted(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let boundArray = new Array();
    for(let i = 0; i< A.length; i++) {
        let value = A[i];
        let left = i - A[i];
        let right = i + A[i];
        boundArray.push([left,1]);
        boundArray.push([right,0]);
    }
    boundArray.sort((a,b)=>{
        if(a[0] === b[0]){
            return b[1] - a[1];
        }
        else {
            return a[0] - b[0];
        }
    });
    console.log(boundArray);
    let count_intersect = 0;
    let count_circle = 0;
    const maximum = 10000000;
    console.log(boundArray.length);
    for(let i = 0; i < boundArray.length; i++) {
        console.log(boundArray[i][1]);
        if(boundArray[i][1] === 1) {
            count_intersect +=count_circle;
            count_circle +=1;
        }
        else {
            count_circle -=1;
        }
        if(count_intersect > maximum) {
            return -1;
        }
    }
    return count_intersect;
}
A = [1,5,2,1,4,0]
NumberOfDiscIntersectionsSorted(A);
