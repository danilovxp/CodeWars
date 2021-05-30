// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portug

function uefaEuro2016(t, s) {
    if (s[1] > s[0]) {
        return `At match ${t[0]} - ${t[1]}, ${t[1]} won!`;
    } else if (s[0] > s[1]) {
        return `At match ${t[0]} - ${t[1]}, ${t[0]} won!`;
    } else {
        return `At match ${t[0]} - ${t[1]}, teams played draw.`;
    }
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])); //, "At match Germany - Ukraine, Germany won!");
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])); //, "At match Belgium - Italy, Italy won!");
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])); //, "At match Portugal - Iceland, teams played draw.");
