// Number encrypting: cypher

// Task
// You will receive a string composed by English words, string.You will have to return a cyphered version of that string.

// The numbers corresponding to each letter are represented at the table below.Notice that different letters can share the same number.In those cases, one letter will be upper case and the other one lower case.


const cypher = (str) => {
  return str
    .replace(/I|l/g, '1')
    .replace(/R|z/g, '2')
    .replace(/e/gi, '3')
    .replace(/a/gi, '4')
    .replace(/s/gi, '5')
    .replace(/G|b/g, '6')
    .replace(/t/gi, '7')
    .replace(/B/g, '8')
    .replace(/g/g, '9')
    .replace(/o/gi, '0')
}


console.log(cypher("Hello World"))
//"H3110 W0r1d"
console.log(cypher("I am your father"))
//"1 4m y0ur f47h3r",
console.log(cypher("I do not know what else I can test. Be cool. Good luck"))
//"1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck",