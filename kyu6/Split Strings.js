// Split Strings

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').


function solution(str){
  if(!str.length){
    return []
  } else if(!(str.length % 2)){
  return str.match(/.{1,2}/g)
  } else {
    return (str.match(/.{1,2}/g) + '_').split(",")
  }
}
console.log(new Array())
console.log(solution("abcdef"))//["ab", "cd", "ef"]);
console.log(solution("abcdefg"))// ["ab", "cd", "ef", "g_"]);
console.log(solution("")) // []