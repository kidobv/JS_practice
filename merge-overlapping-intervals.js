class Pair {
    //first is the lowerlimit of the interval
    //second is the upperlimit of the interval
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
//The input is sorted by time intervals
let mergeIntervals = function (v) {
    let result = [];
    let vLength = v.length;
    let first = v[0].first;
    let second = v[0].second;
    for (let i = 1; i < vLength; i++) {
        if (v[i].first <= second) {
            second = v[i].second;
        }
        else {
            result.push(new Pair(first, second))
            first = v[i].first;
            second = v[i].second;
        }
    }
    //add the last determined interval
    result.push(new Pair(first, second))
    return result;
}

////When using Map here we need to consider that the intervals with the same "first" will be merge automatically because Map has unique keys
// let pairsMap = new Map([[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [10, 15]]);
// let pairsArray = [];
// for ([first, second] of pairsMap) {
//     pairsArray.push(new Pair(first, second))
// }
// console.log(pairsMap.keys());
// console.log(pairsArray);

let v = [new Pair(1, 5), new Pair(3, 7), new Pair(4, 6),
new Pair(6, 8), new Pair(10, 12), new Pair(11, 15)];

console.log(mergeIntervals(v));



//Insert interval and merge if necessary
//Example 1
// Input: intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]
// Output: [[1, 2], [3, 10], [12, 16]]
// Explanation: Because the new interval[4, 8] overlaps with [3, 5], [6, 7], [8, 10].
//Example 2
// Input: intervals = [], newInterval = [5, 7]
// Output: [[5, 7]]
//Example 3
// Input: intervals = [[1, 5]], newInterval = [2, 3]
// Output: [[1, 5]]

var insert = function (intervals, newInterval) {
    let result = [];
    let pre = newInterval;

    for (const interval of intervals) {
        //range to merge hi is < curr interval lo
        if (pre[1] < interval[0]) {
            result.push(pre);
            pre = interval;
        }
        //range to merge is higher than curr interval upper bound
        else if (pre[0] > interval[1]) {
            result.push(interval);
        }
        //renge to merge can fit within the curr interval
        else {//[3,5] [4,8]
            pre[0] = Math.min(pre[0], interval[0]);
            pre[1] = Math.max(pre[1], interval[1]);
        }
    }
    result.push(pre);
    return result;
};