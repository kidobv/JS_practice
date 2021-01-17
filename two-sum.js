
//O(n2) time, O(1) space
// function twoNumberSum(array, targetSum) {
// for(let n of array) {	
//     for(let m of array){
// 		   if(n+m === targetSum && n !== m){
//         	return [m,n].sort((a,b) => a-b);
//       } 
//     }         
//   }
//   return [];
// }

//O(n) time, O(n) space
//map for - of approach
function twoNumberSum(array, targetSum) {
	map = {}	
	for (let num of array) {
		if (num) {
			let sumMinusElement = targetSum - num;
			if (map[sumMinusElement.toString()]) {
				return [sumMinusElement, num].sort((a, b) => a - b)
			}
			map[num.toString()] = num;
		}
	}
	return [];
}

//O(n) time, O(n) space
//return index
twoNumberSum2 = (array, targetN) => {
	if (array.length == 2) return array;
	let myMap = new Map();
	//find if a number y = targetN - x is part of the array
	for (let i = 0; i < array.length; i++) {
		num = array[i];
		if (num) {			
			let substractedNum = targetN - num;
			console.log(substractedNum)
			if (myMap.has(substractedNum)) {	
				return [myMap.get(substractedNum), i];			
			}
			myMap.set(num, i);
		}
	};
	return [];
}

//If the array is sorted 
//O(n) time, O(1) space
//read from each side of the array and decrement the right pointer or increment the left pointer

twoSumSorted = (arr, target) =>{
	let right = arr.length-1;
	let left = 0;
	while(left < right){
		const currSum = arr[left] + arr[right];
		if (currSum > target){
			right--;
		}
		else if (currSum < target){
			left++;
		}
		else{
			return [arr[left], arr[right]];
		}
	}
	return [];
}

let arr = [1, 3, 4, 4, 5];
let arr2 = [1, 3, 4, 10, null, 2];
console.log(twoNumberSum2(arr, 6))
//console.log(twoSumSorted(arr, 6))