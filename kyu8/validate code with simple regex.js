// validate code with simple regex

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

const validateCode = (num) => +num.toString()[0] > 0 && +num.toString()[0] < 4;

console.log(validateCode(123)); //, true);
console.log(validateCode(248)); //, true);
console.log(validateCode(8)); //, false);
console.log(validateCode(321)); //, true);
console.log(validateCode(9453)); //, false);
