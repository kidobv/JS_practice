/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Find First and Last Position of Element in Sorted Array

//short O(n) solution
const searchRange = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let result = [-1, -1];
    let iterations = 0;
    while ((result[0] == -1 || result[1] == -1) && left <= right) {
        iterations++;
        if (nums[left] == target) result[0] = left;
        else left++;
        if (nums[right] == target) result[1] = right;
        else right--;
    }
    console.log("iterations1", iterations)
    return result;
};

//binary search method
//run time O(logn) + O(n)
const searchRange2 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let result = [-1, -1];
    let iterations = 0;
    while (left <= right) {
        iterations++;
        const middle = Math.floor((right + left) / 2)
        if (nums[middle] == target) {
            let temp = middle;
            //search right index
            while (temp <= right && nums[temp] == target) {
                iterations++;
                result[1] = temp;
                temp++;
            }
            //reset temp
            temp = middle;
            //search left index
            while (temp >= left && nums[temp] == target) {
                iterations++;
                result[0] = temp;
                temp--;
            }
            console.log("iterations2", iterations)
            return result;
        }
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        else left = middle + 1;
    }
    console.log("iterations2", iterations)
    return result;
};

//we can do two binary searches  (optimal solution)
//O(logn) time | O(1) space
///////
var searchRange3 = function (nums, target) {
    let firstOccurrence = binarySearch(nums, target, 0, nums.length - 1, true);
    if (firstOccurrence == -1) return [-1, -1];
    let lastOccurrence = binarySearch(nums, target, firstOccurrence, nums.length - 1, false);
    console.log(`K occurrences = ${lastOccurrence - firstOccurrence + 1}`); //get the total ocurrances
    return [firstOccurrence, lastOccurrence];
};

var binarySearch = function (nums, target, startIdx, endIdx, isLeftSearch) {
    if (nums.length == 0 || startIdx > endIdx) return -1;
    let middle = Math.floor((endIdx + startIdx) / 2);
    //let middle = startIdx + (endIdx - startIdx)/2;
    if (nums[middle] == target) {
        //Do binary search for left and right
        if (isLeftSearch) {
            if (middle > startIdx && nums[middle - 1] == target) {
                return binarySearch(nums, target, startIdx, middle - 1, isLeftSearch);
            }
        }
        else {
            if (middle < endIdx && nums[middle + 1] == target) {
                return binarySearch(nums, target, middle + 1, endIdx, isLeftSearch);
            }
        }
        return middle;
    }
    //find new middle to the left
    else if (nums[middle] > target) {
        return binarySearch(nums, target, startIdx, middle - 1, isLeftSearch);
    }
    //find new middle to the right
    else {
        return binarySearch(nums, target, middle + 1, endIdx, isLeftSearch);
    }
}

//Same as above but starting with loop to find the middle
// var searchRange = function(nums, target) {  
//     let left = 0;
//     let right = nums.length - 1;
//     let result = [-1, -1];
//     if(nums.length == 0) return result;
//     while (left <= right) {
//         const middle = Math.floor((right + left) / 2)
//         if (nums[middle] == target) {
//             result[1] = binarySearch(nums, target, left, right, false)
//             //search left index
//             result[0] = binarySearch(nums, target, left, right, true)
//             return result;
//         }
//         else if (target < nums[middle]) {
//             right = middle - 1;
//         }
//         else left = middle + 1;
//     }
//     return result;
//   }


//   var binarySearch = function(nums, target, startIdx, endIdx, isLeftSearch){      
//       if(nums.length == 0 || startIdx > endIdx) return -1;
//       let middle = Math.floor((endIdx + startIdx)/2);         
//            if(nums[middle] == target){
//                //Do binary search for left and right
//                if(isLeftSearch){                  
//                     if(middle > startIdx && nums[middle] == nums[middle-1]){
//                         return binarySearch(nums, target, startIdx, middle-1, isLeftSearch); 
//                     }
//                } 
//                else{
//                     if(middle < endIdx && nums[middle] == nums[middle+1]){
//                         return binarySearch(nums, target, middle+1, endIdx, isLeftSearch); 
//                     }
//                 }
//                return middle;
//         }
//         //find new middle to the left
//         else if(nums[middle] > target){
//             return binarySearch(nums, target, startIdx, middle-1, isLeftSearch);
//         }
//         //find new middle to the right
//         else{
//             return binarySearch(nums, target, middle+1, endIdx, isLeftSearch);
//         }
// }




//console.log(searchRange2([1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6,], 3));
console.log(searchRange2([13, 3, 3, 3, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6,], 3));

console.log(searchRange([13,3,3,3,5,5,5,5,5,6,6,6,6,6,], 3));

function binarySearch1(array, target) {
    // Determine if a target number exists in the array O(log(n)) | O(n) space
    // Another option is creating a helper function and passing two additional parameters for high index and low index
    if (array.length == 0) return false;
    const half = Math.floor(array.length / 2);
    if (array[half] == target) {
        return true;
    }
    if (array[half] > target) {
        return binarySearch1(array.slice(0, half), target);
    }
    else {
        return binarySearch1(array.slice(half + 1, array.length), target);
    }
}

//binary search method
//run time O(logn) 
const binarySearch2 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = left + (right - left) / 2;
        if (nums[middle] == target) {
            return true;
        }
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        else left = middle + 1;
    }
    return false;
};
