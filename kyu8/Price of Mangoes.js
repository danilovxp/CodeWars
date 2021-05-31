// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples

// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

function mango(q, p) {
    let res = 0;
    for (let i = 0; i <= q; i++) {
        if (i % 3 === 0) {
            res += 0;
        } else {
            res += p;
        }
    }
    return res;
}

console.log(mango(3, 3)); //, 6)
console.log(mango(9, 5)); //, 30)
