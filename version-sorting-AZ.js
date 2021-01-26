//Given an array with multiple verisons for example
// ["3.2", "1.0.0", "2.0.0.4", "2.1.7","1.4.5"]
//return a sorted version
// ["1.0.0", "1.4.5", "2.0.0.4", "2.1.7", "3.2"]

sortVersion = (array) =>{
    if(array.length == 0) return [];
    return array.sort((a, b) => compare(a, b));
}

compare = (v1,v2) =>{    
    const charArr1 = v1.split('.');
    const charArr2 = v2.split('.');
    const minL = Math.min(charArr1.length, charArr2.length);
    for(let i=0; i < minL; i++){
        if(charArr1[i] > charArr2[i]){
            return true;
        }
        else if (charArr1[i] < charArr2[i]) 
            return false;
    }
    return true;
}

console.log(sortVersion(["3.2", "1.0.0", "2.0.0.4", "2.1.7", "1.4.5"]));