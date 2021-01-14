export function convertComputerInt(randomInt) {
    if (randomInt === 0) {
        return 'rock';
    } else if (randomInt === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

export function doesUserWin(user, computer) {
    if (user === computer) {
        return true;
    } else if (user === 'rock' && computer === 'scissors') {
        return true;
    } else if (user === 'rock' && computer === 'paper') {
        return false;
    } else if (user === 'paper' && computer === 'rock') {
        return true;
    } else if (user === 'paper' && computer === 'scissors') {
        return false;
    } else if (user === 'scissors' && computer === 'paper') {
        return true;
    } else if (user === 'scissors' && computer === 'rock') {
        return false;
    }
}