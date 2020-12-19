// Is it a number?

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

//? Valid examples, should return true:
//? isDigit("3")
//? isDigit("  3  ")
//? isDigit("-3.23")

//? should return false:
//? isDigit("3-4")
//? isDigit("  3   5")
//? isDigit("3 5")
//? isDigit("zero")

// function isDigit(s) {
//  return !isNaN(s)
// }

const isDigit = s => (!s.replace(/\s/g, '').length) ? false : !isNaN(s)

console.log(isDigit('s2324'))//, false);
console.log(isDigit("3-4"))//, false);
console.log(isDigit('  3   5'))//, false);
console.log(isDigit(' '))//, false);
console.log(isDigit(''))//, false);
console.log(isDigit('3 5'))//, false);

//?--------------------------------------
console.log(isDigit('-234.4'))//, true)
console.log(isDigit('3'))//, true)
console.log(isDigit('  3  '))//, true)
console.log(isDigit('-3.23'))//, true)
console.log(isDigit('-0'))//, true)
console.log(isDigit('0.0'))//, true)