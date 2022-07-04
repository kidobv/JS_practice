// Write a function that can merge two sorted arrays and returns a new array with K items 
// The function inputs are the following:
//arr1 = first array
//arr2 = second array
//k = the number of items to return

let array1 = [2, 4, 6];
let array2 = [1, 3, 5];

mergeArrays = (arr1, arr2, k) => {
    //edge case check for a and b not being null, what to do if one of them is?
    let concatArray = [];
    let result = [];
    if (arr1 && arr2) {
        concatArray = arr1.concat(arr2).sort((a, b) => a - b);
    }
    for (let i = 0; i < k; i++) {
        result.push(concatArray[i]);
    }
    return result;
}
console.log(mergeArrays(array1, array2, 3));


mergeArrays2 = (arr1, arr2, k) => {
    let result = [];
    let a = 0; // arr1 pointer
    let b = 0; // arr2 pointer
    while (k > 0) {
        if (arr1[a] < arr2[b]) { // things to consider, index out of bounds, what to do when out of bounds?
            result.push(arr1[a]);
            a += 1;
        }
        else {
            result.push(arr2[b]);
            b += 1;
        }
        k--;
    }
    return result;
}
console.log(mergeArrays2(array1, array2, 3));


let merge3 = (nums1, nums2, k) => {
    let i = 0; //pointer for nums1
    let j = 0; //pointer for nums2
    let sortedArr = [];

    while (sortedArr.length < k){
        if(nums1[i] < nums2[j]){
            sortedArr.push(nums1[i])
            i++
        }
        else{
            sortedArr.push(nums2[j])
            j++
        }
    }
    return sortedArr;
}

console.log(merge3(array1,array2, 4)) //[1,2,3,4]