// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/javascript

// Calculate average

// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count = count + array[i];
  }
  return count / array.length;
}
