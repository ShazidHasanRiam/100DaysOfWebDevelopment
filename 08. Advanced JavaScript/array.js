// basic array

var playerList = ["Shazid", "Hasan", "Riam"];
console.log(playerList);
console.log(playerList[2]);
console.log(playerList.length);
var playerName = prompt("What is ypur name?");
if (playerList.includes(playerName)) {
  alert("Welcome! You are in the team!");
} else {
  alert("Sorry, You are not in the team!");
}