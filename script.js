let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;

function getRandomCard() {
    return 5;
}

let messageEl = document.querySelector("#message-el"); 
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
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
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
}