// Training JS #32: methods of Math-- - round() ceil() and floor()

function roundIt(n) {
  let arr = n.toString().split(".")
  if (arr[0].length > arr[1].length) {
    return Math.floor(n)
  } else if (arr[0].length < arr[1].length) {
    return Math.ceil(n)
  } else {
    return Math.round(n)
  }
}

console.log(roundIt(3.45))// 4);
console.log(roundIt(34.5))// 34);
console.log(roundIt(34.56))// 35);