// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n.If that value has more than one digit, continue reducing in this way until a single - digit number is produced.The input will be a non - negative integer.

function digital_root(n) {
  while (n.toString().length > 1) {
    n = eval(Array.from(n.toString()).join("+"))
  }
  return n
}

console.log(digital_root(16))//, 7)
console.log(digital_root(456))//, 6)
console.log(digital_root(942))//, 6)
console.log(digital_root(132189))//, 6)
console.log(digital_root(493193))//, 2)