// TYPE CONVERSION
const userInputYear = "1997"; //String
console.log(Number(userInputYear));
console.log(userInputYear);
console.log(userInputYear + 10);
console.log(typeof userInputYear);
console.log(Number(userInputYear) + 10);
console.log(Number("Riam")); // Not Works, NaN output
console.log(typeof NaN);
console.log(String(10), 10);

// TYPE COERCION
console.log("I'm " + 1000 + " years old.");
console.log("I'm " + "1000" + " years old.");
console.log("I'm " + String(1000) + " years old.");
console.log("15" - "5" + 10);
console.log("10" < "15");
console.log("10" < 15);

// Confusing Example
let n = "1" + 1; // n is string here, n = 11
console.log(typeof n);
n = n + 1;
console.log(n);
console.log(typeof n);
