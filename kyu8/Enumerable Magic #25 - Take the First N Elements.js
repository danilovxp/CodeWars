//* Enumerable Magic #25 - Take the First N Elements

// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

const take = (arr, n) => arr.slice(0, n);

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); // [0, 1, 2],  'should return the first 3 items'
