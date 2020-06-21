// https://www.codewars.com/kata/57202aefe8d6c514300001fd

// Training JS #7: if..else and ternary operator

// In Javascript, if..else is the most basic condition statement, it consists of three parts:condition, statement1, statement2, like this:

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
