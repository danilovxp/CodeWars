// Remove First and Last Character Part Two

// This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a

function array(str){

const arr = str.split(",")
if(arr.length < 3){
  return null
} else {
  arr.pop()
  arr.shift()
}
return arr.join(" ")
}




console.log(array(''))//, null);
console.log(array('1'))//, null);
console.log(array('1, 3'))//, null);
console.log(array('1,2,3'))//, '2');