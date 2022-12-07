// Find the smallest index of the string of which key is a prefix
// Input= ["A", "Abet","akind"] key="a"
// Output=2

// Input= ["A", "Abet","akind"] key="b"
// Output=-1

// Input= ["A", "Abet","akind"] key="Ak"
// Output=-1

// Input= ["A", "Abet","akind"] key="ak"
// Output=2

// The character comparison is case sensitive.

// Binary search

// function findSmallestIdx(array, key){
// 	let min = Infinity;
// 	let left = 0;
// 	let right = array.length;

// 	while(left <= right){		
// 		let mid = Math.floor((right - left)/2);
// 		let middle = array[mid];
		
// 		let compare = compareKeys(key, middle)
// 			if (compare == 0) {
//                 min = Math.min(min, mid);
//                 // still continue to do binary search
//                 right = mid-1;
//             } else if (compare==-1) {
//                 // key is less than middle
//                 right = mid-1;
//             } else {
//                 // key is greater than middle
//                 left = mid+1;
//             }
            
//         }
        
//         if (min == Infinity) return -1;
//         return min;
// }
// //[ab, are, ary]
// function compareKeys(s1, s2){
// 	let minL = Math.min(s1.length, s2.length);
// 	let sub1 = s1.substring(0, minL)
// 	let sub2 = s2.substring(0, minL)
// 	return sub1.localeCompare(sub2);
// }

console.log(findSmallestIdx(["A", "a", "ary"], "ar"))
console.log(findSmallestIdx(["A", "a", "Ar","bn","cook","im", "jr","fry", "fr"], "fr"))


// function findSmallestIdx(array, key){
// 	let left = 0;
// 	let right = array.length;

// 	while(left < right){		
// 		let mid = Math.floor((right + left)/2);		
// 		let diff = compareKeys(array[mid], key)
// 		if (diff >= 0) {
//              right = mid;            
//         }
//         else{
//         	left = mid+1;
//         }
//     }
//     return compareKeys(array[left], key) == 0 ? left : -1
// }
// //[ab, are, ary]
// function compareKeys(str, key){
// 	if(str.length > key.length){
// 		toCompare = str.substring(0, key.length);
// 		return toCompare.localeCompare(key);
// 	}
// 	return str.localeCompare(key)
// }


function findSmallestIdx(array, key){
	let left = 0;
	let right = array.length-1;

	while(left < right){		
		let mid = Math.floor((right + left)/2);	
		if (array[mid] > key) {
             right = mid;            
        }
        else{
        	left = mid+1; //5
        }
    }
    return array[left] > key ? left : -1
}

//console.log(findSmallestIdx(["A", "a", "Ar","bn","cook","im", "jr","fry", "fr"], "fr"))