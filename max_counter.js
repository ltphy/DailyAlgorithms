function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    //create counter_array
    let counter_array = new Array(N);
    for(let i = 0;i < N; i++) {
        counter_array[i] = 0;
    }
    let count_time = 0;
    let max_counter = 0;
    for(let i = 0; i < A.length; i++) {
        let value = A[i] - 1;
        if(value >=0 && value <N) {
            counter_array[value] +=1;
            if(counter_array[value]>max_counter) {
                max_counter = counter_array[value];
            }
        } else if(value === N){
            for(let j = 0 ;j <N ;j++) {
                counter_array[j] = max_counter;
            }
        }
    }
    return counter_array;
}
