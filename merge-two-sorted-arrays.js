//JS functions
//O(nlogn) + o(n) time // O(n)+O(m)+O(n+m) space
var merge = function (nums1, m, nums2, n) {
    //slice doesn't mutate the original array but splice does, splice returns the removed elements
    if (nums1.length < m)
    nums1 = nums1.slice(0, m);
    if (nums2.length < n)
    nums2 = nums2.slice(0, n);
    return nums1.concat(nums2).sort((a, b) => a - b);
};

//O(n) time
//

// let merge2 = (nums1, n, nums2, m) => {
// 	let i = 0; //pointer for nums1
// 	let j = 0; //pointer for nums2

// 	while (n > 0 || m > 0){

// 	}
// }
// console.log(merge2([1,4,5], 3, [0,2,3,6,7,8], 4)) //expected output [0,1,2,3,4,5,6]


// Write a function that can merge two sorted arrays and returns a new array with K items 
// The function inputs are the following:
//arr1 = first array
//arr2 = second array
//k = the number of items to return

let array1 = [2];
let array2 = [1, 3, 5];

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