// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

// SpeedCode #2 - Array Madness

// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// array_madness(3, {4, 5, 6}, 3, {1, 2, 3}) == true;
// // because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

function arrayMadness(a, b) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < a.length; i++) {
    sum1 = sum1 + a[i] ** 2;
  }
  for (let i = 0; i < b.length; i++) {
    sum2 = sum2 + b[i] ** 3;
  }
  return sum1 > sum2 ? true : false;
}
