// Shifty Closures

// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

let name = 'Abe';
let greet_abe = function() {
  return "Hello, " + name + '!';
};
let greet_ben = function() {
  name = 'Ben';
  return "Hello, " + name + '!';
};

console.log(greet_abe())
console.log(greet_ben())
