// Given an Array , E.g. [2,5,6,3,9,5,10,56,25] and a number k. Find all the contigous subarrays with length k , if k=3, then all the subarrays are [2,5,6], [5,6,3], [6,3,9] etc.
// part 2 For all these subarrays find the minimum element. 
// part 3 and out of all those minimum elements, return the maximum one.

function contiArrays(arr, k){
	let result = 0;
	for(let left=0; left <= arr.length-k; left++) {
		let curr = arr.slice(left, left+k)
		console.log(curr)
		let min = Math.min(...arr.slice(left, left+k));
		console.log(min)
		result = Math.max(result, min);
	} 

	return result;
}

console.log(contiArrays([2,5,6,3,9,5,10,56,25], 3))
			
			//2,3,3,5,5,10