// Draw stairs

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
