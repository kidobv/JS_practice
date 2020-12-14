// How many ways can an input be decode given the following encoding 
// each alphabetical letter can be represent as a number starting at 1 for a such that
// [a=1,b=2,.....z=26]

const codedMap = new Map();
codedMap.set('1', 'a')
codedMap.set('2', 'b')
codedMap.set('3', 'c')
codedMap.set('4', 'd')
codedMap.set('5', 'e')
codedMap.set('6', 'f')
codedMap.set('7', 'g')
codedMap.set('8', 'h')
codedMap.set('9', 'i')
codedMap.set('10', 'j')
codedMap.set('11', 'k')
codedMap.set('12', 'l')
codedMap.set('13', 'm')
codedMap.set('14', 'n')
codedMap.set('15', 'o')
codedMap.set('16', 'p')
codedMap.set('17', 'q')
codedMap.set('18', 'r')
codedMap.set('19', 's')
codedMap.set('20', 't')
codedMap.set('21', 'u')
codedMap.set('22', 'v')
codedMap.set('23', 'w')
codedMap.set('24', 'x')
codedMap.set('25', 'y')
codedMap.set('26', 'z')

//e.g. 1271826 
//1,2,7,1,8,2,6
//12,7,1,8,2,6
//1,27,1,8,2,6

//e.g. 1226
//abbf : 1,2,2,6  --1st round stored
//avf  : 1,22, 6  -- 2nd round stored
//abz  : 1,2,26
//lbf  : 12,2,6  -- 1st round stored
//lz  : 12,26

//1 + decode(226) -> 3
//12 + decode(26) -> 2

numWays = (encodedMsg) => {
    //Base Cases
    const msgLength = encodedMsg.length;
    if(encodedMsg[0] == 0) {return 0;}
    if ((msgLength == 1 && codedMap.has(encodedMsg[0])) || msgLength == 0){ return 1;}

    let mapKey = encodedMsg.substring(0, 2);
    if (parseInt(mapKey) <= 26) {
        return numWays(encodedMsg.substring(1, encodedMsg.length)) + numWays(encodedMsg.substring(2, encodedMsg.length))
    }
    else {
        return numWays(encodedMsg.substring(1, encodedMsg.length));
    }
}

console.log("non memo: ", numWays("1271826"));

// With Memoization
let memoizeMap = new Map();

memNumWays = (encodedMsg) => {
    const msgLength = encodedMsg.length;
    //Base Cases
    if (encodedMsg[0] == 0) { return 0; }
    if ((msgLength == 1 && codedMap.has(encodedMsg[0])) || msgLength == 0) { return 1; }
    
    // recursion
    const mapKey = encodedMsg.substring(0, 2);

    let baseCode = encodedMsg.substring(1, encodedMsg.length);
    let secondCode = encodedMsg.substring(2, encodedMsg.length);

    let result = memoizedResult(baseCode);
    if (parseInt(mapKey) <= 26) {
        result += memoizedResult(secondCode)
    }
    return result;
}

memoizedResult = (encodedMsg) => {
    if (memoizeMap[encodedMsg]) {
        return memoizeMap[encodedMsg];
    }
    else {
        memoizeMap[encodedMsg] = memNumWays(encodedMsg);
        return memoizeMap[encodedMsg];
    }
}

console.log("memo: ", memNumWays("1271826"));


// With dynamic programming and memoization
dpNumWays = (encodedMsg) => {
   // let memo = {};
    return helper(encodedMsg);
}

helper = (encodedMsg, memo = {}) =>{
    //Base Cases
    const msgLength = encodedMsg.length;
    if (encodedMsg[0] == 0) { return 0; }
    if ((msgLength == 1 && codedMap.has(encodedMsg[0])) || msgLength == 0) { return 1; }
    //memoization
    if(memo[encodedMsg]) return memo[encodedMsg];

    let mapKey = encodedMsg.substring(0, 2);
    let result = helper(encodedMsg.substring(1, encodedMsg.length), memo);

    if (parseInt(mapKey) <= 26) {
        result += helper(encodedMsg.substring(2, encodedMsg.length), memo);
    }
    memo[encodedMsg] = result;
    return result;
}

console.log("dp memo: ", dpNumWays("111111"));
console.log("dp memo: ", dpNumWays("1271826"));

