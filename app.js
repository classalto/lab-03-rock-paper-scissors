// import functions and grab DOM elements
import { convertComputerInt } from './utils.js';
const winsDisplay = document.getElementById('wins-element');
const lossDisplay = document.getElementById('loss-element');
const totalDisplay = document.getElementById('totals-element');
const resultDisplay = document.getElementById('result-element');
const submitButton = document.getElementById('submit-element');
const resetButton = document.getElementById('reset-element');

// initialize state
let currentWins = 0;
let totalMatches = 0;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    
    // get what the user chose
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    
    // get the value of user as a string
    totalMatches++;
    let userChoice = selectedChoice.value;
    let computerRandomInt = Math.floor(Math.random() * 2);

    let computerChoice = convertComputerInt(computerRandomInt);
    console.log(computerChoice);
    

    // choice comparison
    
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors' || computerChoice === 'rock') {
            currentWins++;
            winsDisplay.textContent = currentWins;
            resultDisplay.textContent = 'You Won!';
        } else {
            resultDisplay.textContent = 'You Lost!';
            lossDisplay.textContent = totalMatches - currentWins;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock' || computerChoice === 'paper') {
            currentWins++;
            winsDisplay.textContent = `Wins: ${currentWins}`;
            resultDisplay.textContent = 'You Won!';
        } else {
            lossDisplay.textContent = totalMatches - currentWins;
            resultDisplay.textContent = 'You Lost!';
        }
    } else {
        if (computerChoice === 'paper' || computerChoice === 'scissors') {
            currentWins++;
            winsDisplay.textContent = currentWins;
            resultDisplay.textContent = 'You Won!';
        } else {
            lossDisplay.textContent = totalMatches - currentWins;
            resultDisplay.textContent = 'You Lost!';
        }
    } 
    totalDisplay.textContent = totalMatches;
}); 