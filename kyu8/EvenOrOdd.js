// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// Even or Odd

// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) return "Even";
  else if (number % 2 != 0) return "Odd";
}
