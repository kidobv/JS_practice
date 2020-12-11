let myArr = [1,2,3,4,5]

//using the same array
function reverseMe(arr){
    let halfLength = Math.ceil(arr.length/2)
    let loopLength = halfLength % 2 == 0 ? halfLength : halfLength-1;
    for(let i = 0; i<loopLength; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-1 -i];
        arr[arr.length - 1 - i] = temp;  
    }
    return arr;
}

//using new array
function reverseMe2(arr) {
    let reversedArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return arr;
}

console.log(reverseMe(myArr))
console.log(reverseMe2(myArr))