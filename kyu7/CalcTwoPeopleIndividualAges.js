// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1

// Calculate Two People's Individual Ages

// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

function getAges(sum,difference){
  let first;
  let second;
  let arr = [];
  first = (sum + difference) / 2;
  second = first - difference;
  arr.push(first, second);
  return (sum < 0 || difference < 0 || first < 0 || second < 0) ? null : arr;
  }