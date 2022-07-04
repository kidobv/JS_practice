var generateParenthesis = function (n) {
    let result = [];
    helper(n, 1, 0, "(", result);
    return result;
};

const helper = (n, openCnt, closeCnt, s, result) => {
    //we reach the end
    if (openCnt == n && closeCnt == n) {
        result.push(s);
        return;
    }
    //if open count is equal to n we need to close
    if (openCnt == n ) {
        helper(n, openCnt, closeCnt + 1, s + ")", result);
    }
    //We can't close a parenthesis if there's no open ones
    else if(openCnt == closeCnt){
        helper(n, openCnt + 1, closeCnt, s + "(", result);
    }
    else{
        helper(n, openCnt + 1, closeCnt, s + "(", result);
        helper(n, openCnt, closeCnt+1, s + ")", result);
    }
}

console.log(generateParenthesis(2));