// String Breakers

// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

function stringBreakers(n, string) {
  let strJoin = string.split(" ").join("");
  let res = "";
  for (let i = 0; i < strJoin.length; i += n) {
    res +=
      strJoin.substring(i, i + n).length == n
        ? strJoin.substring(i, i + n) + "\n"
        : strJoin.substring(i, i + n);
  }
  return strJoin.length % n === 0 ? res.slice(0, res.length - 1) : res;
}

console.log(stringBreakers(5, "This is an example string"));
//"Thisi" + "\n" + "sanex" + "\n" + "ample" + "\n" + "strin" + "\n" + "g"

console.log(
  stringBreakers(3, "i09z5rbvjkops8jjm5p9z4zgz0rnf71ypjkd65134xf18f1s")
);
