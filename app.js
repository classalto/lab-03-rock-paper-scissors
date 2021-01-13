// import functions and grab DOM elements
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
    // get the value
    let userChoice = selectedChoice.value;
})