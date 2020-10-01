// https://www.codewars.com/kata/56b1f01c247c01db92000076

// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

const doubleChar = (str) => str.replace(/(.)/g, "$&$&");
