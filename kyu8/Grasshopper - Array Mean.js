// Find Mean


const findAverage = nums => nums.reduce((previousValue, currentItem) => previousValue + currentItem) / nums.length


console.log(findAverage([1]))//, 1)
console.log(findAverage([1, 3, 5, 7]))//, 4)