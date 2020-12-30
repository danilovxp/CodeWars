// SumFibs
// Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.
//
// Example:
//
//   sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5); 2 is the only even number in the sequence and doesn't have another number in the sequence to get added to in the indexed Fibonacci sequence.
// Example:
//
//   sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// // 2 + 8 + 34 = 44;
// ALGORITHMS


function sumFibs(num) {
  let a = 1, b = 0, c, evenArray = [], total = 0;
  while(num >= 1){
    c = a;
    a = a + b;
    b = c;
    evenArray.push(b);
    num--
  }
  for(let i = 0; i < evenArray.length; i++){
    if(evenArray[i] % 2 === 0){
      total += evenArray[i];
    }
  }
  return total
};


console.log(sumFibs(5)) // 2);
console.log(sumFibs(9)) // 44);
console.log(sumFibs(10)) // 44);
console.log(sumFibs(11)) // 44);