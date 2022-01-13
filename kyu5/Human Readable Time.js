// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let h, m, s;
  let time = new Date(seconds * 1000).toISOString().split(':');
  h = seconds / 60 < 1440 ? time[0].slice(-2) : Math.trunc(seconds / 3600);
  m = time[1];
  s = time[2].slice(0, 2);
  return `${h}:${m}:${s}`;
}

console.log(humanReadable(0)); //, '00:00:00', 'humanReadable(0)');
console.log(humanReadable(59)); //, '00:00:59', 'humanReadable(59)');
console.log(humanReadable(60)); //, '00:01:00', 'humanReadable(60)');
console.log(humanReadable(90)); //, '00:01:30', 'humanReadable(90)');
console.log(humanReadable(3599)); //, '00:59:59', 'humanReadable(3599)');
console.log(humanReadable(3600)); //, '01:00:00', 'humanReadable(3600)');
console.log(humanReadable(45296)); //, '12:34:56', 'humanReadable(45296)');
console.log(humanReadable(86399)); //, '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(86400)); //, '24:00:00', 'humanReadable(86400)');
console.log(humanReadable(359999)); //, '99:59:59', 'humanReadable(359999)');

console.log(90 / 3600);
