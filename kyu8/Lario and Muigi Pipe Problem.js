// Lario and Muigi Pipe Problem

// #Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

// #Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

function pipeFix(arr) {
  const res = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    res.push(i)
  }
  return res
}



console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))//, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(pipeFix([1, 2, 3, 12]))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(pipeFix([6, 9]))//, [6, 7, 8, 9]);
console.log(pipeFix([-1, 4]))//, [-1, 0, 1, 2, 3, 4]);
console.log(pipeFix([1, 2, 3]))//, [1, 2, 3]);