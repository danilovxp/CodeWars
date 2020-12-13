//* Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

const getSize = (w, h, d) => [(w * h + h * d + w * d) * 2, w * h * d];

console.log(getSize(4, 2, 6));
console.log(getSize(10, 10, 10) /*[600, 1000]*/);
console.log(getSize(4, 2, 6));
console.log(getSize(4, 2, 6));
