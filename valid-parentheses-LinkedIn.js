var isValid = function(s) {
    const bracketsMap = new Map([['(',')'],['[',']'],['{','}']]);
    //const bracketsMap = new Map({'(':')','[':']','{':'}'});
    const stack = [];
    
    //edge case - s starts with closing bracket
    if(!bracketsMap.has(s[0])) return false;    
    
    let i = 0;       
    stack.push(s[i]);    
    while(stack.length !== 0 || i < s.length){
        i++;
        let currOpenBracket = stack[stack.length-1]; //peek

        if(s[i] === bracketsMap.get(currOpenBracket)){
            stack.pop();    
            continue;
        } 
        else if(!bracketsMap.has(s[i])) return false; //closing bracket
        stack.push(s[i]); //next opening bracket
    }
    return true;
};

console.log(isValid("()()"))