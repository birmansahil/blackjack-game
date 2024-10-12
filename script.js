let firstCard = 6;
let secondCard = 9;
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;

let messageEl = document.querySelector("#message-el"); 
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got blackjack!";
        hasBlackJack = true;
    } else {
        isAlive = false;
        message = "You're out of the game :(";
    }

    messageEl.textContent = message;
}

function newCard() {
    let card = 5;
    sum += card;
    renderGame();
}