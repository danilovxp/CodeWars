// Is the date today


// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.


function isToday(date) {
  const today = new Date()
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}





var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
console.log(isToday(new Date()))//, true);
console.log(isToday(tomorrow),)// false);
console.log(isToday(yesterday),)// false);

