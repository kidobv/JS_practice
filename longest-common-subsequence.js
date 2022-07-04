function longestCommonSubsequence(str1, str2) {
    let dp = [];
    for (let r = 0; r < str1.length + 1; r++) {
        let columns = new Array(str2.length + 1).fill(0);
        dp.push(columns);
    }
    for (let s1Row = 1; s1Row < str1.length + 1; s1Row++) {
        for (let s2Col = 1; s2Col < str2.length + 1; s2Col++) {
            //base case
            //if(s1Row == 0 || s2Col == 0) dp[s1Row][s2Col] = 0;
            if (str1.charAt(s1Row - 1) == str2.charAt(s2Col - 1)) {
                //console.log(dp)
                dp[s1Row][s2Col] = 1 + dp[s1Row - 1][s2Col - 1];
            }
            else {
                dp[s1Row][s2Col] = Math.max(dp[s1Row][s2Col - 1], dp[s1Row - 1][s2Col]);
            }
        }
    }
    return dp[str1.length][str2.length];
}

//  ''a b c
//''0 0 0 0
//a 0 1 1 1
//b 0 1 2 2
//c 0 1 2 3
//d 0 1 2 3
//e 0 1 2 3


// var longestCommonSubsequence = function(text1, text2) {
//   let cache = [];
//     for(let r = 0; r < text1.length; r++){
//         let columns = new Array(text2.length).fill(null);
//         cache.push(columns);
//     }
//     return lcs(text1, text2, cache); 
// }

// var lcs = function( text1,  text2, cache) {
//         let len1 = text1.length-1;
//         let len2 = text2.length-1;
//         if(len1 < 0 || len2 < 0)
//             return 0;
//         if(cache[len1][len2] != null)
//             return cache[len1][len2];
//         if(text1.charAt(len1) == text2.charAt(len2))
//             return cache[len1][len2] = 1 + lcs(text1.substring(0,len1), text2.substring(0,len2),  cache);
//         else 
//             return cache[len1][len2] = Math.max(lcs(text1.substring(0, len1), text2, cache), lcs(text1, text2.substring(0,len2), cache));       
//     }