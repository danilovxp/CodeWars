//* Simple Fun #352: Reagent F

// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

// Task
// You are given a integer array f. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the f is valid. Returns true if it's valid, false otherwise.

function isValid(f) {
  if (f.includes(1) && f.includes(2)) {
    return false;
  } else if (f.includes(3) && f.includes(4)) {
    return false;
  } else if (f.includes(5) && f.includes(6)) {
    return true;
  } else if (f.includes(5)) {
    if (f.includes(6)) {
      return true;
    } else {
      return false;
    }
  } else if (f.includes(6)) {
    if (f.includes(5)) {
      return true;
    } else {
      return false;
    }
  } else if (f.includes(7) || f.includes(8)) {
    return true;
  } else {
    return false;
  }
}

console.log(isValid([1, 3, 7])); //, true);
console.log(isValid([7, 1, 2, 3])); //, false);
console.log(isValid([1, 3, 5, 7])); //, false);
console.log(isValid([1, 5, 6, 7, 3])); //, true);
console.log(isValid([5, 6, 7])); //, true);
console.log(isValid([5, 6, 7, 8])); //, true);
console.log(isValid([6, 7, 8])); //, false);
console.log(isValid([7, 8])); //, true);
