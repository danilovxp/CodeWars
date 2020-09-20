// https://www.codewars.com/kata/55eea63119278d571d00006a

// Smallest unused ID

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids) {
  const sorted = ids.sort(function (a, b) {
    return a - b;
  });
  if (sorted[0] !== 0) return 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1] - 1 && sorted[i] !== sorted[i + 1]) {
      return sorted[i] + 1;
    }
  }
}
