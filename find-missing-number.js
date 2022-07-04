// You are given an array of positive numbers from 1 to n, 
// such that all numbers from 1 to n are present except one number x.
// You have to find x. The input array is not sorted. 

const nums = [3,7,1,2,8,4,5];

findMissingNum = (arr) =>{
    const n = arr.length + 1;
    let membersSum = 0;
    arr.forEach(num => membersSum += num);
    //find the Sum from 1 to N where N is arrLen
    const sum = (n*(n + 1))/2;
    return sum - membersSum;
}

console.log(findMissingNum(nums));