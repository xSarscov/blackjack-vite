import _ from 'underscore';
import { createDeck, askCard, createComputerCards, createCard, setScore } from "./usecases";

let deck = [];

const cardTypes = ['C', 'D', 'H', 'S'],
    faceCards = ['A', 'J', 'K', 'Q'];

// Handle multiple players
let playersScore = [];

const btnAskCard = document.querySelector("#btnAskCard"),
    btnStopGame = document.querySelector('#btnStopGame'),
    btnNewGame = document.querySelector('#btnNewGame');

const playerCards = document.querySelectorAll('.deck__players-cards'),
    playersScoreBoard = document.querySelectorAll('.deck__players-score-value');

// Initialize game and its number of players (by default = 2)
const startGame = (playersNumber = 2) => {
    deck = createDeck(cardTypes, faceCards);
    playersScore = [];

    for (let i = 0; i < playersNumber; i++) {
        playersScore.push(0);
    }

    playerCards.forEach(playerCard => {
        playerCard.innerHTML = '';
    });

    playersScoreBoard.forEach(playerScoreBoard => {
        playerScoreBoard.innerText = 0;
    });

    btnAskCard.disabled = false;
    btnStopGame.disabled = false;

}

// Create ask card event
btnAskCard.addEventListener('click', () => {
    // Set the player card score and its image 
    const card = askCard(deck);
    const playerScore = setScore(0, card, playersScore, playersScoreBoard);
    createCard(0, card, playerCards);

    if (playerScore > 21) {
        btnAskCard.disabled = true;
        btnStopGame.disabled = true;
        createComputerCards(playerScore, deck, playersScore, playersScoreBoard, playerCards);
    } else if (playerScore === 21) {
        btnAskCard.disabled = true;
        btnStopGame.disabled = true;
        setTimeout(() => {
            alert('You won!');
        }, 1000);
    }

});



// Create stop game event
btnStopGame.addEventListener('click', () => {
    btnAskCard.disabled = true;
    btnStopGame.disabled = true;
    createComputerCards(playersScore[0], deck, playersScore, playersScoreBoard, playerCards);
});

// Create new game event
btnNewGame.addEventListener('click', () => {

    startGame();

});

startGame();