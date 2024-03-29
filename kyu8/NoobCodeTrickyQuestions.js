// https://www.codewars.com/kata/572269697297444c570008b9

// noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)

// 1 < 2 < 3 === true, right? but can

// 3 < 2 < 1 === true, too??

// Here's your task: write a function greaterThanLessThan with three arguments (a,b,c) that returns a boolean (true or false), such that

// a = 1
// b = 2
// c = 3
// returns true, as does

// a = 3
// b = 2
// c = 1
// Note: arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.

// Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't.

// Hint: This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.

// Best of luck!

// Need some pointers? Brush up on your operator precedence here and you'll figure it out:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Don't forget your primitives either:
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

const greaterThanLessThan = (a, b, c) => (a < b < c ? true : false);
