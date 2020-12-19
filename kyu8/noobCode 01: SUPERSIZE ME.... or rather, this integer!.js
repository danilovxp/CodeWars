// noobCode 01: SUPERSIZE ME.... or rather, this integer!

// Write a function that rearranges an integer into its largest possible value.


function superSize(n){
  return parseInt(n.toString().split('').sort().reverse().join(''))
}