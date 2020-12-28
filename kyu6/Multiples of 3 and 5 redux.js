// Multiples of 3 and 5 redux

// Task
// Return the sum of the multiples of 3 and 5 below a number.Being the galactic games, the tracks can get rather large, so your solution should work for really large numbers(greater than 1, 000, 000).

function solution(number) {
  let n5 = Math.trunc((number - 1) / 5)
  let n3 = Math.trunc((number - 1) / 3)
  let n15 = Math.trunc((number - 1) / 15)

  let sum_5 = ((n5 * (n5 + 1)) / 2) * 5
  let sum_3 = ((n3 * (n3 + 1)) / 2) * 3
  let sum_15 = ((n15 * (n15 + 1)) / 2) * 15

  return sum_5 + sum_3 - sum_15
}

console.log(solution(10))//, 23);
console.log(solution(20))//, 78);
console.log(solution(100))//, 2318);
console.log(solution(200))//, 9168)
console.log(solution(1000))//, 233168);
console.log(solution(10000))//, 23331668);
console.log(solution(1000000))//, 233333166668);

