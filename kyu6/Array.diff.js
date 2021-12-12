// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      res.push(a[i]);
    }
  }
  return res;
};

const arrayDiff2 = (a, b) => a.filter((e) => !b.includes(e));

console.log(arrayDiff2([], [4, 5])); //, [], "a was [], b was [4,5]");
console.log(arrayDiff2([3, 4], [3])); //, [4], "a was [3,4], b was [3]");
console.log(arrayDiff2([1, 8, 2], [])); //, [1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff2([1, 2, 3], [1, 2])); //, [3], "a was [1,2,3], b was [1,2]")
