// https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba

// Type of sum

//Return the type of the sum of the two arguments

function typeOfSum(a, b) {
  if (typeof (a + b) === "number") {
    return "number";
  }
  return "string";
}
