let firstCard = 6;
let secondCard = 9;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;

if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "You've got blackjack!";
    hasBlackJack = true;
} else {
    isAlive = false;
    message = "You're out of the game :(";
}

console.log(isAlive);
console.log(hasBlackJack);
console.log(message);

function startGame() {
    console.log("Game started");
}