// Show multiples of 2 numbers within a range

// Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

//   Python, Javascript, Java, Ruby versions: return results in a list / array

// NOTICE:

// Do NOT worry about checking zeros or negative values.
// To find out if 3rd parameter(the upper limit) is inclusive or not, check the tests, it differs in each translation

function multiples(s1, s2, s3) {
  let res = []
  for (let i = 1; i < s3; i++) {
    if (Number.isInteger(i / s1) && Number.isInteger(i / s2)) {
      res.push(i)
    }
  }
  return res;
}


s1 = 2; s2 = 4; s3 = 40;
console.log(multiples(s1, s2, s3))//, [4, 8, 12, 16, 20, 24, 28, 32, 36]);



s1 = 13; s2 = 5; s3 = 800;
console.log(multiples(s1, s2, s3))//, [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]);



s1 = 13; s2 = 15; s3 = 800;
console.log(multiples(s1, s2, s3))//, [195, 390, 585, 780]);


s1 = 17; s2 = 15; s3 = 800;
console.log(multiples(s1, s2, s3))//, [255, 510, 765]);


s1 = 27; s2 = 29; s3 = 2000;
console.log(multiples(s1, s2, s3))//, [783, 1566]);