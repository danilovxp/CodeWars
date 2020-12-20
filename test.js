function makeChocolates(small, big, goal){
let count = 0;
if(goal / 2 <= small && goal % 2 === 0){
    return goal / 2
  }
return count
}


console.log(makeChocolates(4, 1, 13))//, 4);
console.log(makeChocolates(4, 1, 14))//, -1);
console.log(makeChocolates(2, 1, 7))//, 1);
console.log(makeChocolates(3, 1, 6))//, 3);
console.log(makeChocolates(8, 0, 7))//, -1);
console.log(makeChocolates(8, 0, 7))//, -1);
console.log(makeChocolates(3, 1, 6))//, 3);
console.log(makeChocolates(2, 1, 9))//, 2);
console.log(makeChocolates(1, 1, 0))//, 0);
console.log(makeChocolates(1, 1, 8))//, -1);
console.log(makeChocolates(1, 2, 2))//, 1);
console.log(makeChocolates(5, 2, 6))//, 3);