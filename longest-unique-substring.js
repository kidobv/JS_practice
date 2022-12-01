

//Find the longest substring with unique characters
//O(n)
//Sliding Window algorithm
var lengthOfLongestSubstring = function (s) {
    if(s.length <= 1) return s.length;

    let pointer = 0;
    let curr = '';
    let maxSub = '';
    let seen = new Map();
 //"abcabcbb"
    //b: i = 4
    //c: i = 5
    //b: i = 6
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (seen.has(char) && seen.get(char) >= pointer) {
            pointer = seen.get(char) + 1;
        }
        curr = s.substring(pointer, i + 1);
        maxSub = maxSub.length < curr.length ? curr : maxSub;
        seen.set(char, i);
    }
    return maxSub.length;
};




// alternate
var lengthOfLongestSubstring = function (s) {
    let max_len = 0;
    let curr_len = 0;
    let hash = {};
    if (s.length < 2) {
        return s.length;
    }
    //"abcabcbb"
    //b: i = 4
    //c: i = 5
    //b: i = 6
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] == null) {
            curr_len += 1;
        } else {
            //b: i = 4
            // (4 - 1, 5) : 3
            //curr = 3
            //c: i = 5
            //(5 - 2, 4) : 3
            //curr = 3
            //c: i = 6
            //(6 - 4, 4) : 2
            //curr = 2
            curr_len = Math.min(i - hash[s[i]], curr_len + 1);
        }
        max_len = Math.max(max_len, curr_len);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};




// Inefficient O(n3)
// var lengthOfLongestSubstring = function (s) {
//     let ans = 0;
//     let n = s.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j <= n; j++) {
//             if (isUnique(s, i, j)) {
//                 ans = Math.max(ans, j - i);
//             }
//         }
//     }
//     return ans
// };

// var isUnique = (s, start, end) => {
//     let charSet = new Set();
//     for (let i = start; i < end; i++) {
//         if (charSet.has(s.charAt(i))) {
//             return false;
//         }
//         charSet.add(s.charAt(i))
//     }
//     return true;
// }
