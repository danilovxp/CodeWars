// Is it a palindrome?

// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

// In Racket, the function is called palindrome?

// (palindrome? "nope") ; returns #f
// (palindrome? "Yay")  ; returns #t

const isPalindrome = (x) =>
  [...x].reverse().join('').toLowerCase() === x.toLowerCase();

console.log(isPalindrome('a')); //true));
console.log(isPalindrome('aba')); //true));
console.log(isPalindrome('Abba')); //true));
console.log(isPalindrome('hello')); //false));
console.log(isPalindrome('Bob')); //true));
console.log(isPalindrome('Madam')); //true));
console.log(isPalindrome('AbBa')); //true));
console.log(isPalindrome('')); //true));
