// Sum Strings as Numbers

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


function sumStrings(a, b) {
  let sum = 0;
  let step = 0;
  let arrA = a.toString().split("").reverse()
  let arrB = b.toString().split("").reverse()
  for (let i = 0; i < arrA.length; i++) {
    step += +arrA[i] + +arrB[i] || 0
    console.log(step);
    if (step > 9) {
      sum += step + 1
      step = 0
    } else {
      sum += step
      console.log(sum);
    }
  }
  return sum.toString().split("").reverse().join("")
}

//console.log(sumStrings('123', '456'))// '579'
console.log(sumStrings('8797', '45'))// '8842'
//console.log(sumStrings('800', '9567'))// '10367'
//console.log(sumStrings('1', '2')) // '3'
//console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')) // '712577413488402631964821329'