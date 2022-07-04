var isHappy = function(n) {
    //edge cases
    if(n == 1) 
        return true;
    
    let numberSet = new Set();
    let numArr = []
    
    while(!numberSet.has(n)){
        let newNum = 0;
        numberSet.add(n)
        numArr = Array.from(String(n), Number);

        // numArr.forEach(num => newNum += Math.pow(num,2))
        // for(let i=0; i < numArr.length; i++){
        //     newNum += Math.pow(numArr[i], 2)
        // }        
        
        newNum = numArr.reduce((accN, currentN) => accN + Math.pow(currentN,2), 0);
        if (newNum == 1) 
            return true;
        else 
            n = newNum;
    }    
    return false   
};

//recursive un preferred way
var isHappy2 = function(n, numSet) {
    //edge cases
    if(n == 1) 
        return true;

    if(numSet.has(n))
        return false;

    numSet.add(n)
    const numArr = Array.from(String(n), Number);
    let newN = numArr.reduce((accN, currentN) => accN + Math.pow(currentN,2), 0);
    
    return isHappy2(newN, numSet)
};

console.log(isHappy2(19, new Set()))
console.log(isHappy(19))