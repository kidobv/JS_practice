function isMonotonic(array) {
    // Write your code here.
    if (array.lenght <= 1) return true;
    let isIncreasing = null;
    let index = 0;
    while (array[index] == array[index + 1] && index < array.length - 1) {
        index++;
    }
    //all numbers are equal
    if (index == array.length - 1) return true;
    //determining if the array is increasing or decreasing
    isIncreasing = array[index] < array[index + 1];

    for (let i = index + 1; i < array.length - 1; i++) {
        if (isIncreasing && array[i] <= array[i + 1]) {
            continue;
        }
        else if (!isIncreasing && array[i] >= array[i + 1]) {
            continue;
        }
        else{
            console.log("isIncreasing: ", isIncreasing);
            console.log(`array values: ${array[i]}, ${array[i + 1]}`);
            
            return false;
        }
    }
    return true;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))