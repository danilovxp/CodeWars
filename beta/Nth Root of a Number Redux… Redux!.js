// Nth Root of a Number Redux… Redux!
//
//   Task
// Given two numbers x and n, calculate the nth root of x, e.g. r such that r^n = x. However, your using a legacy library that doesn't contain several useful functions, see below.

const root = (x, nth) =>  x ** (1/nth)

console.log(root(4, 2))// // 2
console.log(root(8, 3))// // 2
console.log(root(256, 4))// // 4
console.log(root(9, 2))// // 3