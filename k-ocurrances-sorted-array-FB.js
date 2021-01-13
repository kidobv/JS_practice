// Given a sorted array of n elements, possibly with duplicates, find the number of occurrences of the target element.

// Example 1:

// Input: arr = [4, 4, 8, 8, 8, 15, 16, 23, 23, 42], target = 8
// Output: 3

//target O(logn) time
findOcurrances = (arr, target) =>{
   let occurrences = 0;
    //divide an conquer
    let halfPoint = Math.floor(arr.length/2);
    if(arr[halfPoint] == target){
        occurrences += 1;
        //check left side
        let leftIdx = halfPoint -1; 
        while(arr[leftIdx] == target){
            occurrences++;
            leftIdx--;
        }
        //check right side
        let rightIdx = halfPoint +1;
        while(arr[rightIdx] == target) {
            occurrences++;
            rightIdx++;
        }
    }
    else{
        // try the left half
        if(arr[halfPoint] > target){
            occurrences = findOcurrances(arr.slice(0, halfPoint), target);
        }
        else {
            // try the right half
           occurrences =  findOcurrances(arr.slice(halfPoint+1, arr.length), target);
        }       
    }    
    return occurrences;

}

console.log(findOcurrances([4, 4, 8, 8, 8, 8, 16, 23, 23, 42], 42)); 