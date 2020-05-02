// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// Array plus array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 = sum1 + arr1[i];
    sum2 = sum2 + arr2[i];
  }
  return sum1 + sum2;
}
