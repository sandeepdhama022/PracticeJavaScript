const randomNum = Math.floor(Math.random()*100)+1;

const form = document.querySelector('#container');
const userInput = document.querySelector('#txtGuess');
const submit = document.querySelector('#btnSubmit');

const resultSection = document.querySelector('#resultInfo');
const preGuesses = document.querySelector('#PreviousGuesses');
const remainGuesses = document.querySelector('#remAttempts');

let arrPrevGuesses = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

/*
Start the game if playGame value is true
Check value is a number or not
If number check number between 1 to 100
Match the number with random number

*/

function validateGuess(guess){
    
}

function checkGuess(){
    //
}

function displayMessage(){
//
}

function endGame(){
    //
}

function startGame(){
    //
}
