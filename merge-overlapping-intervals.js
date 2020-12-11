class Pair {
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