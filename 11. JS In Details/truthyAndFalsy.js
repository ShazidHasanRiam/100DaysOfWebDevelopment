// 5 falsy values in JS
// 0, undefined, '', null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Rahim"));
console.log(Boolean({}));
console.log(Boolean(""));

// Type coersion in if else
const money = 0;
if (money) {
  console.log("Save for future");
} else {
  console.log("Get a job you stupid!");
}

// Another example
let height;
if (height) {
  console.log("height is DEFINED");
} else {
  console.log("height is UNDEFINED");
}

// Another example
let weight = 10;
if (weight) {
  console.log("weight is DEFINED");
} else {
  console.log("weight is UNDEFINED");
}
