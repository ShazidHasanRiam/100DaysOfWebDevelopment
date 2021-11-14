let js = "boring";
if (js === "boring") {
  alert("Keep practicing js more");
}
alert("Pass");

// Practice from variable
let country = "Bangladesh";
let continent = "Asia";
let population = 160;

console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population (in million): " + population);

//data types
let isIsland = false;
let language;

console.log("Island: " + isIsland);
console.log("Language: " + language);

//let, const & var

//let = to declare variables that can be changed later
let letAge = 21;
letAge = 25;
//this works perfectly

//const = to declare variables that cannot be chaged later
const constAge = 21;
constAge = 25;
//this will not work

//var = old method of defining variables, should be avoided

//JS works without declaring any variables
lastName = "Riam";
//works but NOT RECOMMENDED.

//Basic Operators
//Mathematical Operators
const now = 2050;
const ageRiam = now - 1997;
const ageHasan = now - 2018;
console.log(ageRiam, ageHasan);

//String Concatenation
const firstName = "Shazid";
console.log(firstName + " " + lastName);

//Assignment Operator
let x = 10 + 4;
console.log(x);
x += 10; // x = x + 10
console.log(x);
x++; //x = x+1

//Comparison Operators
console.log(ageRiam > ageHasan); // <, >, <=, >=

// Operator Precedence
let a, b;
a = b = 10 + 5 - 8;
console.log(a, b);
// mdn operator precedence table
