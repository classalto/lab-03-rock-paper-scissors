// import functions and grab DOM elements
import { convertComputerInt, doesUserWin } from './utils.js';

const winsDisplay = document.getElementById('wins-element');
const lossDisplay = document.getElementById('loss-element');
const drawDisplay = document.getElementById('draw-element');
const totalDisplay = document.getElementById('totals-element');
const resultDisplay = document.getElementById('result-element');
const submitButton = document.getElementById('submit-element');
const resetButton = document.getElementById('reset-element');
const resetCount = document.getElementById('reset-count');
const newGameSpan = document.getElementById('new-game-span');

// initialize state

let currentWins = 0;
let totalMatches = 0;
let currentDraws = 0;
let currentLoss = 0;
let reset = 0;

resetButton.style.display = 'none';
newGameSpan.style.display = 'none';




// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    
    // get what the user chose
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    
    // get the value of user as a string
    totalMatches++;
    totalDisplay.textContent = totalMatches;
    let userChoice = selectedChoice.value;
    let computerRandomInt = Math.ceil(Math.random() * 3);

    let computerChoice = convertComputerInt(computerRandomInt);
    console.log(computerChoice);

    const gameResults = doesUserWin(userChoice, computerChoice);
    

    // does user win?

    if (gameResults === 'win') {
        currentWins++;
        winsDisplay.textContent = currentWins;
        resultDisplay.textContent = 'You Won!';
    }
    if (gameResults === 'lose') {
        currentLoss++;
        lossDisplay.textContent = currentLoss;
        resultDisplay.textContent = 'You Lost!';
    }
    if (gameResults === 'draw') {
        currentDraws++;
        drawDisplay.textContent = currentDraws;
        resultDisplay.textContent = 'Its a draw!';
    }

    resetButton.style.display = 'block';
    newGameSpan.style.display = 'block';
    
    
});

resetButton.addEventListener('click', () => {
    reset++;
    resetCount.textContent = reset;
    totalMatches = 0;
    currentWins = 0;
    currentDraws = 0;
    winsDisplay.textContent = currentWins;
    drawDisplay.textContent = currentDraws;
    lossDisplay.textContent = totalMatches - currentWins;
    totalDisplay.textContent = totalMatches;
    resultDisplay.textContent = '';
});