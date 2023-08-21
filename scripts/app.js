const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const overlayCancelButton = document.getElementById('overlay-cancel-btn');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const startNewGameButton = document.getElementById('start-game-btn');
const gameAreaElement = document.getElementById('active-game');
const gameOverElement = document.getElementById('game-over');

const activePlayerNameElement = document.getElementById('active-player-name');


const editPlayer1Button = document.getElementById('edit-player-1-btn');
const editPlayer2Button = document.getElementById('edit-player-2-btn');
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElements = document.getElementById('game-board');


editPlayer1Button.addEventListener('click', openPlayerConfig);
editPlayer2Button.addEventListener('click', openPlayerConfig);
overlayCancelButton.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);

startNewGameButton.addEventListener('click', startNewGame);
gameBoardElements.addEventListener('click', selectGameField);

// for (const gameFieldElement of gameFieldElements){
//     gameAreaElement.addEventListener('click', selectGameField);
// }