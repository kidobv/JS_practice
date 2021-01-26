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

//3sum that add up to 0 and elements are not unique return unique sets 
var threeSum = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    right--;
                    left++;
                }
                else if (sum > 0) {
                    right--;
                }
                else {
                    left++;
                }
            }
        }
    }
    return result;
};
