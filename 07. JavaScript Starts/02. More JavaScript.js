//Function

//Stanford Karel (5*5)
function main () {
    moveFourTimes();
    turnLeft();
    moveFourTimes()

}

function moveFourTimes(){
    move();
    move();
    move();
    move();
}

//More JS Practice
function getMilk (bottles){
    var cost = bottles * 1.5;
    //code
}
getMilk(5);

//Floor Value
var testFloor = 4.655;
alert(Math.floor(testFloor));


function getMilk(money){
    return money % 2.5;
}
var change = getMilk(5);
prompt(change);
