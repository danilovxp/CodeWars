// Training JS #14: Methods of Number object--toString() and toLocaleString()

// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

function colorOf(r, g, b) {
  const rHex = r.toString().length < 17 ? `0${r.toString(16)}` : r.toString(16);
  console.log(rHex.toLocaleString());
  return rHex;
}

console.log(colorOf(255, 0, 0)); //, "#ff0000");   showColor("#ff0000");
//console.log(colorOf(0, 111, 0)); //, "#006f00");    showColor("#006f00");
//console.log(colorOf(1, 2, 3)); //, "#010203");    showColor("#010203");
