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
