//////exmaple 1
const counter=function() {
  var _counter=0;
  return {
    add: function(num) { _counter+=num; },
    retrieve: function() { return _counter }
  };	
};
let count=counter();
count.add(9);
count.add(5);
console.log(count.retrieve())

////////////example 2
const counter2 = function(factor) {
  return {
    add: function(num) { return factor += num }
  };	
};
let count2 = counter2(9);
console.log(count2.add(5))

///////////// example 3
const addition = function(factor){
  return number => number + factor;
}
let addNine = addition (9)
console.log(addNine(5));

///////////////// example 4
const addBase = (base) => number => number + base;
let addSix = addBase (6); // number => number + base; addSix has this function inside at this moment
console.log(addSix(8))

// async example, here the setTimeout finishes execution but assings it's callback function alert(i) a timer of 1000+i milisec,
// therefore by the time alert is called the for loop is done and it has put into memory(stack) 3 alert calls. Each function has to wait 1000+1, 1000+2, 1000+3
// since the 3 function calls are placed in stack almost instantaneously (for loop is fast) then they come up only (i) 1 milisecond apart from each other.
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}

////counter
const privCounter = function(init) {
	if (!isFinite(init) || init < 1){
      init = 1;
    } 
    return (num) => num + init 
}
let privateCount = privCounter(1);
console.log(privateCount(4))

//// 2 parameters counter
const privCounter2 = function(init) { return (num,nn) => num + init + nn}
let privateCount2 = privCounter2(1); //privateCount2 = (num,nn) => num + init + nn
console.log(privateCount2(4,6))

////nested counter
const privCounter3 = function(init) { return (num) => nim => num + init +nim }
privateCount3 = privCounter3(1);
let vfr = privateCount3(4)
console.log(vfr(9))
console.log(vfr(5))

//counter exmplained

function createCounter(initial) {
  //-- define local-to-function variables
  var counter = initial;
 
  //-- define nested functions. Each of them will have
  //   a reference to the current scope object
 
  /**
   * Increments internal counter by given value.
   * If given value is not a finite number or is less than 1, then 1 is used.
   */
  function increment(value) {
    if (!isFinite(value) || value < 1){
      value = 1;
    }
    counter += value;
  } 
  /**
   * Returns current counter value.
   */
  function get() {
    return counter;
  } 
  //-- return object containing references
  //   to nested functions
  return {
    increment: increment,
    get: get
  };
}
 
//-- create counter object
var myCounter = createCounter(100);
 
console.log(myCounter.get());   //-- prints "100"
 
myCounter.increment(5);
console.log(myCounter.get());   //-- prints "105"


function multiplier (factor) {
  return (number) => { number * factor };
}

let twice = multiplier(2);
console.log(twice(5)) //10


//CLosure Object
function Book(title) {
  let title_;
  this.getTitle = function () {
    return title_;
  }
  this.setTitle = function (newTitle) {
    title_ = newTitle;
  }
  this.setTitle(title);
}