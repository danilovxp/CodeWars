// https://www.codewars.com/kata/583710ccaa6717322c000105/javascript

// Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2) {
    return number * 9;
  } else {
    return number * 8;
  }
}
