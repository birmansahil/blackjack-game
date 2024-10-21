let player = {
    name : "Sahil",
    chips : 150
};

let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";

let playerEl = document.querySelector("#player-el");
let messageEl = document.querySelector("#message-el"); 
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13 ) + 1;

    if(randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard; 

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

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
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}