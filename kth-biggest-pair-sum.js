// Given an array of integers find the k-th biggest pair sum

// pseudo code
// have a result array to store the Sum pair results as we find larger pairs
// use 2 pointers to always reference the 2 biggest integers of the inspected elements
// check if next integer is larger than either pointer and if it is replace the smallest pointer to point at the new larger found
// keep track of which pointers points at the smallest pointer

function kthPairSum (arr, k){
	if(arr.length <= 2) return arr;
	const result = [];

	// two pointers
	let sP = arr[1] > arr[0] ? 0 : 1;
	let lP = arr[1] > arr[0] ? 1 : 0;

	result.push([sP, lP]);

	// start from idx 2 
	for(let i=2; i<arr.length; i++){
		let next = arr[i];
		if (next > arr[sP]){
			if(next > arr[lP]){
				sP = lP;
				lP = i;
			}
			else{
				sP = i;
			}
			result.push([sP, lP])
		}
	}

	// return the kth biggest - from right to left of the result array return k

	return result[result.length - k];
}


console.log(kthPairSum([1,2,5,6,3,9], 2))