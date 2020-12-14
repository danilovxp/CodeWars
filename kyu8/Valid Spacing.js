//* Valid Spacing

// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

function validSpacing(s) {
  let arr = s.split('');
  if (arr[0] === ' ' || arr[arr.length - 1] === ' ') {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ' && arr[i + 1] === ' ') {
      return false;
    }
  }
  return true;
}

console.log(validSpacing('Hello world')); //, true);
console.log(validSpacing(' Hello world')); //, false);
console.log(validSpacing('Hello  world ')); //, false);
console.log(validSpacing('Hello')); //, true);
console.log(validSpacing('Helloworld')); //, true);
