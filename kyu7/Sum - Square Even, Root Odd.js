// Sum - Square Even, Root Odd

// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

const sumSquareEvenRootOdd = arr => +eval(arr.map((num) => !(num % 2) ? num * num : num ** 0.5).join("+")).toFixed(2)

// const sumSquareEvenRootOdd = arr => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//       sum += Math.pow(arr[i], 2)
//     } else {
//       sum += +Math.sqrt(arr[i])
//     }
//   }
//   return +sum.toFixed(2)
// };

console.log(Math.sqrt(0))
console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))//, 91.61);
console.log(sumSquareEvenRootOdd([1,14,9,8,17,21]))//, 272.71);