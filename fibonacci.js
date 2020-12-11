
//memoized
function mfibonacci(n, memo) {
  memo = memo || {}
  if (memo[n]) {
    return memo[n]
  }
  if (n <= 1) {
    return 1
  }
  return memo[n] = mfibonacci(n - 1, memo) + mfibonacci(n - 2, memo)
}

//regular recurssion
function fibonacci(n) {
  if (n <= 1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log("regular fibo >> ", fibonacci(40))
console.log("memoized fibo >> ", mfibonacci(50))