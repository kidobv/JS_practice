/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Find First and Last Position of Element in Sorted Array

//short O(n) solution
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = [-1, -1];
    while ((result[0] == -1 || result[1] == -1) && left <= right) {
        if (nums[left] == target) result[0] = left;
        else left++;
        if (nums[right] == target) result[1] = right;
        else right--;
    }
    return result;
};


console.log(searchRange([1, 2, 3], 1));