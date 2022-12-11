// Write a function that can merge two sorted arrays and returns a new array with K items 
// The function inputs are the following:
//arr1 = first array
//arr2 = second array
//k = the number of items to return


//Better approach
function mergerArrays(a, b, k) {
    let result = [];
    let pointA = 0, pointB = 0;
    let aNum = a[pointA];
    let bNum = b[pointB];

    while (result.length < k && (pointA < a.length || pointB < b.length)) {
        if (aNum > bNum) {
            result.push(b[pointB])
            pointB++;
            //check out of bounds
            if (pointB == b.length)
                bNum = Infinity;
            else
                bNum = b[pointB];
        }
        else {
            result.push(a[pointA])
            pointA++;
            //check out of bounds
            if (pointA == a.length)
                aNum = Infinity;
            else
                aNum = a[pointA];
        }
    }
    return result;
}

console.log(mergerArrays([1, 2, 5], [3, 4, 6], 6))
console.log(mergerArrays([1], [2, 3, 4], 4))
console.log(mergerArrays([1, 3, 4], [2], 4))
console.log(mergerArrays([1, 2, 5], [3, 4, 6], 5))
console.log(mergerArrays([1, 2, 5], [4, 6, 10], 10))


let array1 = [2, 4, 6];
let array2 = [1, 3, 5];

//inefficient
mergeArrays1 = (arr1, arr2, k) => {
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
console.log(mergeArrays1(array1, array2, 3));

//doesn't cover out of bounds pointers
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

//doesn't cover k > nums1.length + nums2.length
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

