// Make Chocolates

// Haloween is around the corner and we have to distribute chocolates.We need to assemble a parcel of goal grams of chocolates.The goal can be assumed to be always a positive integer value.

// There are small chocolates(2 grams each) and big chocolates(5 grams each)
// To reach the goal, the chocolates(big and small) must be used as- is, meaning, the chocolates cannot be broken into smaller pieces
// Maximize the use of big chocolates that are available to achieve the desired goal.And only then should you proceed to use the small chocolates.
//   NOTE: "Maximize" does not imply you have to use all the available big chocolates before using the small chocolates
// For example, consider the goal of 6, and big = 1, small = 3. Using the existing one big chocolate, it is not possible to achieve the remainder of the weight of 1. Therefore, avoid using the big chocolate.Use the existing 3 small chocolates and achieve the goal.
// Determine the number of small chocolates that are required to achieve the desired parcel weight.

// Write a function make_chocolates that will accept three integer values as arguments, in the following order:

// small -> number of small chocolates available
// big -> number of big chocolates available
// goal -> the desired weight of the final parcel
// The function should return the number of small chocolates required to achieve the goal.The function should return -1 only if the goal cannot be achieved by any possible combination of big chocolates and small chocolates.


function makeChocolates(small, big, goal) {
  for (let s = 0; s <= small; s++) {
    for (let b = 0; b <= big; b++) {
      if (b * 5 + s * 2 === goal) return s;
    }
  }
  return -1
}


console.log(makeChocolates(4, 1, 14))//, -1);
console.log(makeChocolates(2, 1, 7))//, 1);
console.log(makeChocolates(3, 1, 6))//, 3);
console.log(makeChocolates(8, 0, 7))//, -1);
console.log(makeChocolates(8, 0, 7))//, -1);
console.log(makeChocolates(3, 1, 6))//, 3);
console.log(makeChocolates(2, 1, 9))//, 2);
console.log(makeChocolates(1, 1, 0))//, 0);
console.log(makeChocolates(1, 1, 8))//, -1);
console.log(makeChocolates(1, 2, 2))//, 1);
console.log(makeChocolates(5, 2, 6))//, 3);