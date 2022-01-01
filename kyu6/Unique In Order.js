// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) => {
  let arrayOfValues = !Array.isArray(iterable) ? iterable.split('') : iterable;
  return arrayOfValues.reduce((acc, currentValue, currentIndex) => {
    if (arrayOfValues[currentIndex - 1] !== currentValue) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
};
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // == ['A', 'B', 'C', 'D', 'A', 'B']

console.log(uniqueInOrder('ABBCcAD')); //         == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); //     == [1,2,3]
