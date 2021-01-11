//Exclamation marks series #2: Remove all exclamation marks from the end of sentence

function remove(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != "!") {
      return s.slice(0, i + 1);
    }
  }
}

console.log(remove("Hi!")); //, "Hi");
console.log(remove("Hi!!!")); //, "Hi");
console.log(remove("!Hi")); //, "!Hi");
console.log(remove("!Hi!")); //, "!Hi");
console.log(remove("Hi! Hi!")); //, "Hi! Hi");
console.log(remove("Hi")); //, "Hi");
