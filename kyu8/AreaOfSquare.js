// https://www.codewars.com/kata/5748838ce2fab90b86001b1a

// Area of a Square

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(a) {
  let b = (a / (2 * Math.PI)) * (360 / 90);
  let s = Math.pow(b, 2);
  return +s.toFixed(2);
}
