# Rock, Paper, Scissors Game

# application outcomes
    - allow user to choose between 3 inputs: rock, paper, or scissors. click a button to submit
    - allow the user to reset their session
    - once the user has decided, compare their input to a random computer input
    - display to the user the current state of their session: Wins, losses, and total number of matches played

    ## HTML Setup
        - header and title for application
        - list of rules w/ header
        - containers to display: wins , losses, total games (draw counts as win for the user), and match summary display
        - two buttons: submit and reset
        - three radio buttons: rock , paper , scissor
    
    ## application logic
        - get dom elements:
            - 1x for three radio buttons (rps/userchoice)
            - 4x for winsDisplay, lossDisplay, totalGamesDisplay, matchSummaryDisplay
            - 2x for submit button, reset button, 
        - initialize state
            - init currentWins to 0
            - init totalMatches (in a session) to 0
        - add event listener to submitButton
            - increment total games
            - when the event is triggered create userChoiceassign the value of the currently checked radioButton, using querySelector
            - create a variable computerRandomValue and assign a random value 0, 1, 2. rps respectively
            - declare computerChoice variable
            - lossCounter = totalGames - wins
            - create a convertComputerRandom(randomValue) to decide based on integer whether rock, paper, or scissors was picked. assign to computerChoice, a string 'rock'
            - create a function decideWinner that compares userChoice and computerChoice
                - if user won or drew increment wins variable and insert "You won"
                - else insert "you lost" and loss
        - add event listener for resetButton
            - reset total, wins, losses
            - match display hidden
            - submit.disable false



