// Simple Fun #395: Fibonacci digit sequence
//
// Task
// You are given three non negative integers a, b and n, and making an infinite sequence just like fibonacci sequence, use the following rules:
//
//   step 1: use ab as the initial sequence.
//   step 2: calculate the sum of the last two digits of the sequence, and append it to the end of sequence.
//   repeat step 2 until you have enough digits
// Your task is to complete the function which returns the nth digit (0-based) of the sequence.



function find(a,b,n){
  n = +String(n).slice(-4);
  console.log(n)
  let idx = n;
  let c = 0, str = `${a}${b}`;
  while(n){
      a = str[str.length - 2];
      b = str[str.length - 1]
      c = +a + +b;
      str += c
      n--
  }
  return +str[idx]
}


// console.log(find(7,8,9))//,5)
console.log(find(0,0,1000000))//,0)
// console.log(find(7,8,10))//,8)
// console.log(find(7,8,11))//,1)
// console.log(find(7,8,13))//,4)

