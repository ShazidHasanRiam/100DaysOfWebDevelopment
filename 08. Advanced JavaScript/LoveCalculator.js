// Math.random() -  Generates a random number
prompt("What is your name? ");
prompt("What is their name? ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1 to 100

//conditional
if (loveScore > 75){
    alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
} 
if (loveScore > 30 && loveScore <= 75){
    alert("Your love score is " + loveScore + "%");
}

if (loveScore <=30) {
    alert("Your love score is " + loveScore + "%" + " You go together like oil and water");
}