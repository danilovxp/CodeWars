// https://www.codewars.com/kata/57a429e253ba3381850000fb

// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(w, h) {
  if (w / h ** 2 <= 18.5) return "Underweight";
  if (w / h ** 2 <= 25.0) return "Normal";
  if (w / h ** 2 <= 30.0) return "Overweight";
  if (w / h ** 2 > 30.0) return "Obese";
}
