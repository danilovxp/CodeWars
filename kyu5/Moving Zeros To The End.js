// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (arr) => {
  let zeros = [];
  let res = [];
  arr.map((num) => {
    num === 0 ? zeros.push(num) : res.push(num);
  });
  return res.concat(zeros);
};

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
console.log(!!0);
