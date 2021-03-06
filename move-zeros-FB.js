//Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. 

moveZeros = (array) =>{
    if(array.length <= 1) return array;
    for(let i=0; i<array.length; i++){
        if(array[i] == 0){
            let leftSubArray = array.slice(0, i);
            let rightSubArray = array.slice(i+1, array.length);
            array = [0, ...leftSubArray, ...rightSubArray];      
        }
    }   
    return array;
}
//console.log(moveZeros([0,1,10,20,0,59,63,0,88,0]))

//The array has to be modified in-place. O(n) 
moveZerosFixed = (array) => {
    if (array.length <= 1) return array;
    let lengthA = array.length;
    let writeIndex = lengthA - 1;
    let readIndex = lengthA - 1;
    
    while (readIndex >= 0) {
        if (array[readIndex] != 0) {
            array[writeIndex] = array[readIndex];
            writeIndex--;            
        }       
        readIndex--;
    }

    while(writeIndex >= 0){
        array[writeIndex] = 0;
        writeIndex--;
    }
  
    return array;
}

console.log(moveZerosFixed([0, 1, 10, 20, 0, 59, 63, 0, 88, 0]))


//The array has to be modified in-place. O(n/2) time, O(1) space
moveZerosFixed2 = (array) => {
    let right = array.length-1;
    let left = 0;

    while(left < right){
        while(array[left] === 0){
            left++;
        }       
        if(array[right] === 0){
            array[right] = array[left];
            array[left] = 0; //target
            left++;
        }
        right--;
    }    

    return array;
}
console.log(moveZerosFixed2([0, 1, 10, 20, 0, 59, 63, 0, 88, 0]))
