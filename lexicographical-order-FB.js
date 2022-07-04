/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    //console.log(alphabetMap)
    if (words.length < 2) {
        return true;
    }

    const alphabetMap = new Map();
    for (let i = 0; i < order.length; i++) {
        alphabetMap.set(order.charAt(i), i);
    }    

    //iterate words
    for (let i = 0; i < words.length - 1; i++) {
        if (!compare(words[i], words[i + 1], alphabetMap)){
            return false;
        }
    }
    return true;        
};

let compare = (s1, s2, map) =>{
    const smallestL = Math.min(s1.length, s2.length);
    for(let i=0; i<smallestL; i++){
        if (s1[i] !== s2[i]){ //abc, acd
            if (map.get(s1[i]) > map.get(s2[i])){
                return false;
            } 
            else {
                return true;
            }
        }        
    }//abc // abcd
    //if we are out of the loop then it means that either s1 === s2 or s1 > s2;
    if(s1.length > s2.length){
        return false;
    }
    return true;
}

//console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
//console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));
//console.log(isAlienSorted(["apple", "app"], "ngxlkthsjuoqcpavbfdermiywz"));
console.log(isAlienSorted(["appleeee", "zappld"], "ngxlkthsjuoqcpavbfdermiywz"));
