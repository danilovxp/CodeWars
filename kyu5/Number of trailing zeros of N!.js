// Number of trailing zeros of N!

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

//   N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

function zeros(n) {
  let divider = 1
  let sum = 0

  while (divider <= n) {
    sum = Math.floor(sum + n / (divider *= 5))
  }
  return sum
}

console.log(zeros(0))//, 0
console.log(zeros(5))//, 1
console.log(zeros(6))//, 1
console.log(zeros(30))//, 7