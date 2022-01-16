// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const arr = str.split(' ');
  let res = [];
  let slicedWord = null;
  arr.map((el) => {
    if (el.match(/[a-z]/i)) {
      slicedWord = el.slice(1, el.length);
      res.push(slicedWord + el[0] + 'ay');
    } else {
      res.push(el);
    }
  });
  return res.join(' ');
}

// console.log(pigIt('Pig latin is cool')); //,'igPay atinlay siay oolcay')
// console.log(pigIt('This is my string')); //,'hisTay siay ymay tringsay')
console.log(pigIt('Hello world !')); //;     // elloHay orldway !
