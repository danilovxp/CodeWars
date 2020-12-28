// Number encrypting: decypher

function decypher(str) {
  let modifyStr = str
    .replace(/1\b\w|1\b/g, 'I')
    .replace(/1/, 'l')
    .replace(/2\b/g, 'R')
    .replace(/2/g, 'z')
    .replace(/3/gi, 'e')
    .replace(/4/gi, 'a')
    .replace(/5/gi, 's')
    .replace(/6\b\w/gi, 'G')
    .replace(/6/g, 'b')
    .replace(/7/gi, 't')
    .replace(/8/g, 'b')
    .replace(/9/g, 'g')
    .replace(/0/g, 'o')
  return modifyStr
}


console.log(decypher("H3110 W0r1d"))//, "Hello World",
console.log(decypher("1 4m y0ur f47h3r"))//, "I am your father",
console.log(decypher("1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck"))
//, "I do not know what else I can test. Be cool. Good luck",
console.log(decypher('N3i7h3r d0 1'))//, "Neither do I",
console.log(decypher('1, 1. 1 m34n 13773r 1'))//, "I, I. I mean letter I",
console.log(decypher("60475 4nd 60475"))//, "Goats and boats",
console.log(decypher('814h 614h 1, 614h 614h'))//, "Blah blah I, blah blah",
console.log(decypher('1. 2. 3. 4. 5. 6. 7. 8. 0 1 123456790'))//'I. R. E. A. S. G. T. B. O I lzeasbtgo
