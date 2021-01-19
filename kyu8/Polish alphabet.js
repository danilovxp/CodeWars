// Polish alphabet

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
// Your task is to change the letters with diacritics:
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

function correctPolishLetters(str) {
  return str
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ś/g, "s")
    .replace(/ó/g, "o")
    .replace(/ź|ż/g, "z");
}

console.log(correctPolishLetters("Jędrzej Błądziński")); //,"Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa")); //, "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie")); //,"Maria Sklodowska-Curie"
