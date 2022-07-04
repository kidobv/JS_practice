
//memoized
function mfibonacci(n, memo) {
  memo = memo || {}
  if (memo[n]) {
    return memo[n]
  }
  if (n <= 0) return 0;
  if (n <= 2) return 1;  
  return memo[n] = mfibonacci(n - 1, memo) + mfibonacci(n - 2, memo)
}

//regular recurssion
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.time("First call");
console.log("regular fibo >> ", fibonacci(7))
console.timeEnd("First call");

console.time("Second call");
console.log("memoized fibo >> ", mfibonacci(7))
console.timeEnd("Second call");


// Linkedin question

///overcomplicated - maybe for no ES6 support
function memoize(fn) {
    return function() {
        this.memo = (this.memo || {});
        //converts the Array like object (arguments) into an Array
        let args = Array.prototype.slice.call(arguments);
        if (typeof this.memo[args] == 'undefined') {
            this.memo[args] = fn.apply(this, arguments);
        }
        console.log(this.memo)
        return this.memo[args];
    }
}

//JSON key method I prefer this one
const memoize2 = (fn) => {
  // a cache of results
  const results = {};
  // return a function for the cache of results
  return (...args) => {
    // a JSON key to save the results cache
    const argsKey = JSON.stringify(args);
    // execute `fn` only if there is no cached value of clumsysquare()
    if (!results[argsKey]) {
      // store the return value of clumsysquare()
      results[argsKey] = fn(...args);
    }
    // return the cached results
    return results[argsKey];
  };
};

function fib(n) {
    if (n <= 0) return 0;
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

let mfib = memoize2(fib)

// console.time("First call");
// console.log("regular fibo >> ", mfib(8))
// console.timeEnd("First call");

console.time("third call");
console.log("memoized fibo >> ", mfib(7))
console.timeEnd("third call");

console.time("Second call");
console.log("memoized fibo >> ", fib(7))
console.timeEnd("Second call");

