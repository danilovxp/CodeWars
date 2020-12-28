// Training JS #10: loop statement--for

// for loop is one of the most frequently used loop statements in JS.It works like while loop.In lesson 9, we wrote a while loop:

function pickIt(arr) {
  var odd = [], even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])
  }

  return [odd, even];
}

console.log(pickIt([1, 2]))//, [[1], [2]]);
console.log(pickIt([1, 2, 3]))//, [[1, 3], [2]]);
console.log(pickIt([3, 2, 1]))//, [[3, 1], [2]]);
console.log(pickIt([10, 20, 30]))//, [[], [10, 20, 30]]);
console.log(pickIt([11, 21, 31]))//, [[11, 21, 31], []]);
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]))//, [[1, 5, 1, 1], [8, 4, 6]]);