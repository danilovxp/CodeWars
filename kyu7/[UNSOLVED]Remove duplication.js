// Remove duplication
//Write a function that accepts an array of number as parameter, and it returns array after removing all duplicated numbers.
function removeDuplication(arr){
  let filtered = [];
  for(let i = 0; i < arr.length; i++){
    if(!arr.includes(arr[i], i + 1)){
      filtered.push(arr[i])
    }
  }
  return filtered
}
console.log(removeDuplication([1,2,3,2,4,6,2,6,7]))//, [1,3,4,7]);
//console.log(removeDuplication([1,2,1,2,1,1,2,2]))//, []);
//console.log(removeDuplication([2,5,6,7,5,2,6]))//, [7]);