// Swap Value
function test(){
    var a = "3";
    var b = "9";
}
var c = a;
a = b;
b = c;
console.log("a is " + a );
console.log("b is " + b);

// String Concatenation
var message = "Hello";
var myName = "Riam";
alert(message + " there" + " " + myName);

// Length
var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140-tweetCount) + " characters remaining");

// Slice
var sliceName = "Shazid";
sliceName.slice(1, 3);

var tweetUnder140 = tweet.slice(0 , 140);
alert(tweetUnder140);

// Uppercase & Lowercase
var upperName = "Riam";
var lowerName = "Shazid"

prompt(upperName.toUpperCase());
upperName = upperName.toUpperCase();

lowerName = lowerName.toLowerCase();

// Challenge
//Create a var that stores the name that user enters via prompt
var cName = prompt("What is your name?");
//Capitalize the first letter of the name
//Isolate the first character
var firstChar = cName.slice(0,1);
//Turn the first character to uppercase
var uppercaseFirstChar = firstChar.toLocaleUpperCase();
//Isolate the rest of the name
var restOfName = cName.slice(1,cName.length);
//Change the rest of the name to lowercase
restOfName = restOfName.toLocaleLowerCase();
//Concatenate the first character with the rest of the characters
var capitalizedName = uppercaseFirstChar = restOfName;
//Use the capitalized version of the names to greet them using an alert
alert("Hello " + capitalizedName + "!");
//Hello, Riam!

// Numbers
var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog age is " + humanAge + " years old in human years.");

//Increment & Decrement
var incX = 7;
incX++ ; //incX = 8
incX+=2 ; //incX = 10

var decX = 10;
decX--; //decX = 9
decX -=2; //decX = 7