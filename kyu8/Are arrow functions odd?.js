// Are arrow functions odd?

// Time to test your basic knowledge in functions! Return the odds from a list:

// odds([1,2,3,4,5]) #=> [1,3,5]

const odds = (v) => v.filter((x) => x % 2);

console.log(odds([])); //, [], "Should handle empty array");
console.log(odds([2, 4, 6])); //, [], "Should handle array with even numbers only");
console.log(odds([1, 3, 5])); //, [1, 3, 5], "Should handle array with odd numbers only");
console.log(odds([1, 2, 3, 4, 5, 6])); //, [1, 3, 5], "Should handle mixed array");
