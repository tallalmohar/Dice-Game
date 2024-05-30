


// We can get a random num for each Player
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let player1Num = getRandomInt(6);
let player2Num = getRandomInt(6);

//initializing and putting each img in an array 
let diceImg1 = "<img class='player1-img' src='./images/dice1.png'>"
let diceImg2  = "<img class='player1-img' src='./images/dice2.png'>"
let diceImg3  = "<img class='player1-img' src='./images/dice3.png'>"
let diceImg4  = "<img class='player1-img' src='./images/dice4.png'>"
let diceImg5  = "<img class='player1-img' src='./images/dice5.png'>"
let diceImg6  = "<img class='player1-img' src='./images/dice6.png'>"

let imgArray = [diceImg1,diceImg2,diceImg3,diceImg3,diceImg4,diceImg5,diceImg6]

//testing
let randomImgSelected1 = imgArray[getRandomInt(6)];
let randomImgSelected2 = imgArray[getRandomInt(6)];
let playerImg1 = document.querySelector(".player1-div");
let playerImg2 = document.querySelector(".player2-div");

playerImg1.innerHTML = randomImgSelected1;
playerImg2.innerHTML = randomImgSelected2;


