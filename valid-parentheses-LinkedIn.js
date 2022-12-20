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

//console.log(isValid("()()"))

var isValid = function (s) {
    const map = new Map([["(", ")"], ["{", "}"], ["[", "]"]]);
    //edge case
    if (!map.get(s[0])) return false;

    //we need a stack
    let stack = [s[0]];

    for (let i = 1; i < s.length && stack.length > 0; i++) {
        let openBracket = stack[stack.length - 1];
        //found the closing bracket
        if (map.get(openBracket) == s[i]) {
            stack.pop();
        }
        else if (map.get(s[i])) {
            stack.push(s[i])
        }
        else {
            return false;
        }
    }
    return stack.length == 0;
}

//Special case
//'(abc)', '((a)b)', 'abc(())' would be valid and ')a(' '((b())'  would be invalid. '()()' is not valid
function isValid2(s){
    if(!s || !s.trim()) return false;
    let openCount = 0;
    s=s.trim();
    for(let i=0; i<s.length; i++){
        if(s[i] == "(") openCount++;
        if (s[i] == ")"){
            if (openCount === 0 || (openCount == 1 && i < s.length - 1)) 
                return false;
            else
                openCount--;
        }        
    }
    return openCount == 0;
}


console.log(isValid2("(abc)"))
console.log(isValid2("((a)b)"))
console.log(isValid2("abc(()) "))
console.log(isValid2("()()"))
console.log(isValid2(")a("))
console.log(isValid2("((b())"))
console.log(isValid2(null))
console.log(isValid2(""))
console.log(isValid2(" "))