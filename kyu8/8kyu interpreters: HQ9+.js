// *8kyu interpreters: HQ9+

// You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

// If the input is 'H', return 'Hello World!'
// If the input is 'Q', return the input
// If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// For everything else, don't return anything (return null in C#, None in Rust).

function HQ9(code) {
  let string = '';
  if (code === 'H') {
    return 'Hello World!';
  } else if (code === 'Q') {
    return code;
  } else if (code === '9') {
    for (let i = 99; i > 1; i--) {
      string += i !== 2 ? `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.\n` :`2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    }
    return string;
  } else {
    return undefined;
  }
}

console.log(HQ9('H')); //'Hello World!',"'H' should return 'Hello World!'");
console.log(HQ9('Q')); // 'Q', "'Q' should return 'Q'");
console.log(HQ9('9')); //'99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer');
console.log(HQ9('X')); //undefined,'Everything else should not return anything');
