/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const alphabetMap = new Map();
    for (let i = 0; i < order.length; i++) {
        alphabetMap.set(order.charAt(i), i);
    }
    //console.log(alphabetMap)
    if (words.length < 2) {
        return true;
    }

    //iterate words
    for (let i = 0; i < words.length - 1; i++) {
        const currWord = words[i];
        const nextWord = words[i + 1];
        console.log(currWord);
        console.log(nextWord);
        //get iteration length
        const k = Math.min(currWord.length, nextWord.length);
        for (let j = 0; j < k; j++) {
            const firstWordOrder = alphabetMap.get(currWord[j]);
            const secondWordOrder = alphabetMap.get(nextWord[j]);
            //indexOf takes O(n) thus is not the most efficent solution
            // const firstWordOrder = order.indexOf(currWord[j]);
            // const secondWordOrder = order.indexOf(nextWord[j]);
            console.log(firstWordOrder);
            console.log(secondWordOrder);
            if (firstWordOrder === secondWordOrder) continue;
            if (firstWordOrder > secondWordOrder) { 
                return false; 
            }
            else
                break;
        }
        //if we get out of the loop and they are the same length means that they are the same             //word then return true
        //thus the substring word should be prior the full string to be in order
        if (currWord.length > nextWord.length) {
            return false;
        }
        return true;
    }
};

//console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
//console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));
console.log(isAlienSorted(["apple", "app"], "ngxlkthsjuoqcpavbfdermiywz"));
