// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
let list = [1, 3, 4, 2, 5, 9, 0, 1];

//regular comparison from n and n+1, then swap values in Asc or Desc way
function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    let sortedArray = [];
    let temp = null;
    while (arr.length > 1) {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[0] > arr[i]) {
                temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
            }
        }
        sortedArray.push(arr[0]);
        arr = arr.splice(1, arr.length)
    }
    //add the last element
    sortedArray.push(arr[0])
    return sortedArray;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

//console.log(bubbleSort(list))
console.log(selectionSort(list))