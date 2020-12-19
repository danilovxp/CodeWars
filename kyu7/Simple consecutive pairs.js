//Simple consecutive pairs

//In this Kata your task will be to return the of pairs that have consecutive numbers as follows:

function pairs(array, count = 0) {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1)
      count += 1;
  return count;
}