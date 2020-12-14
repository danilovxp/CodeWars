// * Palindrome chain length

// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

const palindromeChainLength = (n) => {
  let steps = 0;
  let number = n;
  if (n.toString() === n.toString().split('').reverse().join('')) {
    return steps;
  }
  while (number.toString() !== number.toString().split('').reverse().join('')) {
    steps++;
    number += Number(number.toString().split('').reverse().join(''));
  }
  return steps;
};

console.log(palindromeChainLength(1)); //,  0);
console.log(palindromeChainLength(88)); //, 0);
console.log(palindromeChainLength(87)); //, 4);
console.log(palindromeChainLength(89)); //, 24);
console.log(palindromeChainLength(10)); //, 1);
