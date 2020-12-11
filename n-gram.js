//Given a string and a number n, provide a function that returns the most frequent n-gram in the string
//print the result
//if there are multiple n - grams having the same maximum frequency please print the one that is the smallest lexicographically(the first one according to the dictionary sorting order)
// example: For the word "pilot" there are three 3-grams: "pil", "ilo" and "lot". 

var nGramMap = {};
/**
 * 
 * @param {string} word the text to evaluate
 * @param {number} n the ngram size
 */
function rFindNgram(word, n) {    
    wordLength = word.length;
    if (wordLength >= n) {
        wordSubString = word.substring(0, n)
        if (nGramMap[wordSubString]) {
            nGramMap[wordSubString]++;
        }
        else {
            nGramMap[wordSubString] = 1;
        }
        return rFindNgram(word.substring(1, wordLength), n);
    }
    else {
        let mostFrequent = null;
        for (const key in nGramMap) {
            if (!mostFrequent || (nGramMap[key] > nGramMap[mostFrequent])) {
                mostFrequent = key;
            }
            else if (nGramMap[key] == nGramMap[mostFrequent]) {
                if (key < mostFrequent) mostFrequent = key;
            }
        }
        console.log(nGramMap)
        return mostFrequent;
    }
}
//with sorting and recursion
// let nGramMap = new Map();
// function getNgram(term, n) {
//     nGram = term.substring(0, n);
//     if (term.length < n) {
//         let sortedTuples = [...nGramMap].sort((a, b) => b[1] - a[1])
//         return sortedTuples[0];
//     }
//     if (nGramMap.get(nGram)) {
//         nGramMap.set(nGram, nGramMap.get(nGram) + 1)
//     }
//     else {
//         nGramMap.set(nGram, 1)
//     }
//     return getNgram(term.substring(1, term.length), n)
// }

function findNgram(word, n) {
    let nGramMap = {};
    wordLength = word.length;
    while (word.length >= n) {
        wordSubString = word.substring(0, n)
        if (nGramMap[wordSubString]) {
            nGramMap[wordSubString]++;
        }
        else {
            nGramMap[wordSubString] = 1;
        }
        word = word.substring(1, wordLength);
    }
    let mostFrequent = null;
    for (const key in nGramMap) {
        if (!mostFrequent || (nGramMap[key] > nGramMap[mostFrequent])) {
            mostFrequent = key;
        }
        else if (nGramMap[key] == nGramMap[mostFrequent]) {
            if (key < mostFrequent) mostFrequent = key;
        }
    }
    console.log(nGramMap)
    return mostFrequent;

}
//sort and while loop
function getNgram(term, n) {
    let nGramMap = new Map();
    while (term.length >= n) {
        nGram = term.substring(0, n);
        if (nGramMap.get(nGram)) {
            nGramMap.set(nGram, nGramMap.get(nGram) + 1)
        }
        else {
            nGramMap.set(nGram, 1)
        }
        term = term.substring(1, term.length)
    }
    let sortedNgrams = [...nGramMap].sort((a, b) => b[1] - a[1])
    return sortedNgrams[0];
}

//console.log(rFindNgram("AGCTTCGATTCGATT", 3));
//console.log(findNgram("AGCTTCGATTCGATT", 3));



function nGramy(nString, n){
    let termMap = new Map();
    while(nString.length >= n){
       let term = nString.substring(0,n);
       if(termMap.has(term)){
           termMap.set(term, termMap.get(term) + 1);
       }
       else{
           termMap.set(term, 1);       
        }
        nString = nString.substring(1, nString.length);
    }
    //let sortedMap = new Map([...termMap.entries()].sort((a, b) => b[1] - a[1]));
    let sortedArr = [...termMap].sort((a, b) => b[1] - a[1]);
    //return sortedMap.keys().next().value;
    return sortedArr[0][0];
}

console.log(nGramy("AGCTTCGATTCGATTATT", 3));