const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
// console.log(userInput);
const guessSlot = document.querySelector('.guesses')
// console.log(previousGuesses);
const remaining = document.querySelector('.lastResult')
// console.log(remainingGuesses);
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess=[];
let numGuess = 1;

let playGame=true;

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess < 1){
        alert("Please enter a number greater than 1");
    }
    else if(guess > 100){
        alert("Please enter a number less than 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame(); 
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number you guessed is low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number you guessed is high`);
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}    `;
    numGuess++;
    remaining.innerHTML = `11-${numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){

}

function newGame(){

}