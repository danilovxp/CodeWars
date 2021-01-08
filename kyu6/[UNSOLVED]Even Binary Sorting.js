// Even Binary Sorting

// Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.

function evenBinary(n) {
  const decimalArr = n.split(" ").map((el) => parseInt(el, 2));
  let even = [];
  let odd = [];
  for (let i = 0; i < decimalArr.length; i++) {
    if (decimalArr[i] % 2 === 0) {
      even.push(decimalArr[i]);
    } else {
      odd.push(decimalArr[i]);
    }
  }
  even = even.sort((a, b) => a - b);
  return even.concat(odd);
}
console.log((5 >>> 0).toString(2));
//console.log(evenBinary("101 111 100 001 010")); //, "101 111 010 001 100");
console.log(evenBinary("110 011 001 100 101")); //, "100 011 001 110 101");
