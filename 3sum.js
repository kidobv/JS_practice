function threeNumberSum(array, targetSum) {
    // Write your code here.
    let resultArray = [];
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                let a = [array[i], array[left], array[right]];
                resultArray.push(a);
                left += 1;
                right -= 1;
            }
            else if (currentSum < targetSum) {
                //we want a bigger sum
                left += 1;
            }
            else if (currentSum > targetSum) {
                right -= 1;
            }
        }
    }
    return resultArray;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));