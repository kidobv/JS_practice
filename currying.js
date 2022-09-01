// Implement console.log
// console.error
// console.debug
// HubSpot question for currying

function log(...args){
	console.log(...args)
}

function errorlog(...args){
	console.log("Error", ...args)
}

function debuglog(...args){
	console.log("Debug", ...args)
}

function curry (func) {
	return (a) => (...b) => func(a, ...b); 
}

let args = ["hola", 2, {'kido': "ame"}]

let curriedLog = curry(log);

let errorLog = curriedLog("Error: ");
let debugLog = curriedLog("Debug: ");

// log(...args)
errorLog("hola", 2, {'kido': "ame"});
debugLog(...args);


// Twitter currying exercise
// Lets make a function that changes pronouns from he/him she/her to they/them 
// Lets make a function that All caps every word

// How do we simplify them, if we are making a library that does a lot of similar functions 

let globalPrompt = "hi he works at Twitter and she works at dhs, talk to him";
const genderMap = {
		"he" : "they",
		"she" : "they",
		"him" : "them",
		"her" : "them"
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

function transformPrompt(func){	 
	return (prompt) => prompt.split(" ").map(func).join(" ");
}
let toAllCaps = transformPrompt(word => word.toUpperCase());
let toNonBinary = transformPrompt(word => genderMap[word] ?? word)

console.log(toAllCaps(globalPrompt))
console.log(toNonBinary(globalPrompt))


// Curry function
// if no parameters are passed we need to execute the callback with the previous args
function curry(callback) {  
  let curried = (...args) =>{
    if(args.length === 0){
      return callback();
    }

    return (...otherArgs) => {
      if(otherArgs.length === 0){
        return callback(...args)
      }

      return curried(...args, ...otherArgs)
    }
  }

  return curried;
}