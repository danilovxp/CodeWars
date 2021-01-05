// Nth Root of a Number
//
// Given two numbers x and n, calculate the (positive) nth root of x.
//
// This means that being r = result, r^n = x; Examples

const root = (x, n) => Math.pow(x, 1/n);


// console.log(root(4, 2));   // 2 (the square root of 4 is 2 , 2^2 = 4);
// console.log(root(8, 3));   // 2 (the cube root of 8 is 2   , 2^3 = 8);
// console.log(root(256, 4)); // 4 (the 4th root of 256 is 4  , 4^4 = 256);
// console.log(root(9, 2));   // 3 (the square root of 9 is 3 , 3^2 = 9)