// function twoNumberSum(array, targetSum) {
// for(let n of array) {	
//     for(let m of array){
// 			if(n+m === targetSum && n !== m){
//         return [m,n].sort((a,b) => a-b);
//       } 
//     }         
//   }
//   return [];
// }

//map for - of approach
function twoNumberSum(array, targetSum) {
	map = {}	
	for (let num of array) {
		if (num) {
			let sumMinusElement = targetSum - num;
			if (map[sumMinusElement.toString()]) {
				console.log(map)
				return [sumMinusElement, num].sort((a, b) => a - b)
			}
			map[num.toString()] = num;
		}
	}
	return [];
}

twoNumberSum2 = (array, targetN) => {
	if (array.length == 2) return array;
	let myMap = new Map();
	//find if a number y = targetN - x is part of the array
	for (let num of array) {
		if (num) {			
			let substractedNum = targetN - num;
			if (myMap.get(substractedNum)) {	
				return [substractedNum, num];			
			}
			myMap.set(num, num);
		}
	};
	return [];
}

let arr = [1, 3, 4, 5];
let arr2 = [1, 3, 4, 10, null, 2];
console.log(twoNumberSum2(arr, 6))