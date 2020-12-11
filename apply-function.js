// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max(...numbers);

console.log(max)

const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);

console.log(array)

