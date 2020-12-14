let canSegmentString = function (s, dictionary, memo = {}) {
    if(memo[s]) return memo[s];
    for (let i = 1; i < s.length + 1; i++) {
        let first = s.substr(0, i);
        if (dictionary.has(first)) {
            let second = s.substr(i);
            if (second.length === 0) {
                memo[s] = true;
                return true;
            }
            if (dictionary.has(second)) {
                memo[s] = true;
                return true;
            }
            if (canSegmentString(second, dictionary)) {
                memo[s] = true;
                return true;
            }
        }
    }
    memo[s] = false;
    return false;
};

let s = "hellonow";
let dictionary = new Set(["hello", "hello", "on", "now"]);
if (canSegmentString(s, dictionary)) {
    console.log("String Can be Segmented");
}
else {
    console.log("String Can NOT be Segmented");
}