const age = 18;
if (age === 18) {
  console.log("You Just became an adult");
}

// === strict equality operator
//      no type coersion
// == lose equality operator
//      type coersion works

// 18 === '18' false
// 18 == '18' true

const number = prompt("Enter a number: ");
console.log(number);
console.log(typeof number);

if (number == 25) {
  // '25' = 25
  console.log("Cool!");
}

if (number === 30) {
  // '30' not equal 30
  console.log("Great!");
}
