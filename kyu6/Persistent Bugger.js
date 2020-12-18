//* Persistent Bugger.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let str = num.toString()
  let count = 0;
  while(str.length > 1){
    count++
    str = str.split("").reduce((a, b) => a * b).toString()
  }
  return count
}

console.log(persistence(39))//,3);
console.log(persistence(4))//,0);
console.log(persistence(25))//,2);
console.log(persistence(999))//,4);