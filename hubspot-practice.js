function addKidany() {
    return this + " + kidany";
}

String.prototype.kidany = addKidany;

let text = "Berrios";

console.log(text.kidany())

// Add a funciton to the String prototype to put a comma in between every character
String.prototype.addCommas = function () { return this.split("").join() }

console.log(text.addCommas())

// Implement console.log
// console.error
// console.debug
// HubSpot question for currying


function curry(callback) {
    //return (a) => (...b) => callback(a, ...b);
    return (a) => (...b) => callback(a, ...b);
}

let args = ["hola", 2, { 'kido': "ame" }]

let curriedLog = curry(console.log);

// let curriedLog = function(...args){
//     return function (...otherArgs){
//         console.log(...args, ...otherArgs)
//     }
// }

let errorLog = curriedLog("Error:");
let debugLog = curriedLog("Debug:");

errorLog("hola", 2, { 'kido': "ame" });
debugLog(...args);


// Twitter currying exercise
// Lets make a function that changes pronouns from he/him she/her to they/them 
// Lets make a function that All caps every word

// How do we simplify them, if we are making a library that does a lot of similar functions 

let globalPrompt = "hi he works at Twitter and she works at dhs, talk to him";
const genderMap = {
    "he": "they",
    "she": "they",
    "him": "them",
    "her": "them"
}

// function toAllCaps(prompt){
// 	const words = prompt.split(" ").map(word => word.toUpperCase())
// 	return words.join(" ");
// }

// function toNonBinary(prompt){	
// 	const words = prompt.split(" ").map(word => genderMap[word] ?? word)
// 	return words.join(" ");
// }

// Lets curry them

function transformPrompt(func) {
    return (prompt) => prompt.split(" ").map(func).join(" ");
}
let toAllCaps = transformPrompt(word => word.toUpperCase());
let toNonBinary = transformPrompt(word => genderMap[word] ?? word)

console.log(toAllCaps(globalPrompt))
console.log(toNonBinary(globalPrompt))


// Curry function
// if no parameters are passed we need to execute the callback with the previous args
function curryP(callback) {
    let curried = (...args) => {
        if (args.length === 0) {
            return callback();
        }

        return (...otherArgs) => {
            if (otherArgs.length === 0) {
                return callback(...args)
            }

            return curried(...args, ...otherArgs)
        }
    }

    return curried;
}

// nGram
// Write a function that takes a string of characters and an integer n and returns the most frequent n-gram 
//Example: 'abcabxeabcd' and 2 returns 'ab'
function nGram(str, n){
    const map = new Map();
    let max = str.substring(0, n);
    map.set(max, 1);
    for(let i=1; i<str.length-n; i++){
        let sub = str.substring(i,i+n);
        map.set(sub, (map.get(sub) || 0) + 1);
        max = map.get(sub) > map.get(max) ? sub : max;
    }
    return max;
}
console.log(nGram("cabxcabcad", 2))
console.log(nGram("abxcbcd", 2))

// 2 sum
// Given an array of integers and a number n, return true/false if there is a pair that sums up to that number
function twoSum(arr, target){
    if(!arr || !target) return -1;
    const set = new Set();
    for(let num of arr){
        let complement = target-num;
        if(set.has(num)) return true;         
        set.add(complement)
    }    
    return false;
}   

console.log(twoSum([1, 3, 5, 62, 8, 4, 2], 9))
console.log(twoSum([1, 2], 9))
console.log(twoSum([]))

// Merge two string
// Given the sorted arrays a and b, return a merged array of K length
// example: [1,4,5] [2,3,7], k = 5
// example: [1] [2,3,7,8], k = 5
// return: [1,2,3,4,5]

function mergerArrays(a,b,k){
    let result = [];
    let pointA = 0, pointB = 0;
    let aNum = a[pointA];
    let bNum = b[pointB];

    while (result.length < k && (pointA < a.length || pointB < b.length)){ 
        if (aNum > bNum){
            result.push(b[pointB])
            pointB++;   
            //check out of bounds
            if(pointB == b.length) 
                bNum = Infinity;
            else        
                bNum = b[pointB];    
        }
        else{
            result.push(a[pointA])
            pointA++; 
           // check out of bounds
            if (pointA == a.length)
                aNum = Infinity;
            else
                aNum = a[pointA];             
        }
    }
    return result;
}
console.log("merge arrays")
console.log(mergerArrays([1, 2, 5], [3, 4, 6], 6))
console.log(mergerArrays([1], [2, 3, 4], 4))
console.log(mergerArrays([1, 3, 4], [2], 4))
console.log(mergerArrays([1, 2, 5], [3, 4, 6], 5))
console.log(mergerArrays([1, 2, 5], [4, 6, 10], 10))