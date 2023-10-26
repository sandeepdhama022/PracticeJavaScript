const randomNum = Math.floor(Math.random()*100)+1;

const form = document.querySelector('#container');
const userInput = document.querySelector('#txtGuess');
const submit = document.querySelector('#btnSubmit');

const resultSection = document.querySelector('#resultInfo');
const preGuesses = document.querySelector('#PrevGuesses');
const remainGuesses = document.querySelector('#remAttempts');
let suggestion = document.querySelector('.suggestion')

let arrPrevGuesses = [];
let numGuess = 10;

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
If not match update result info
*/

function validateGuess(guess){
    if(isNaN(guess)){
        showAlert('Please enter a valid number')
    } else if(guess < 1 || guess > 100){
        showAlert('Please enter a number between 1 to 100')
    } else {
        arrPrevGuesses.push(guess)
        showAlert('')
        checkGuess(guess)
    }
}

function showAlert(message){
    suggestion.innerHTML = message
}

function checkGuess(guess){
    if(guess === randomNum){
        showAlert('You Won')
        endGame()
    } else if(guess < randomNum){
        showAlert('Number you entered is too Low')
        displayMessage(guess)
    } else if(guess > randomNum){
        showAlert('Number you entered is too High')
        displayMessage(guess)
    }
}

function displayMessage(guess){
    preGuesses.innerHTML = arrPrevGuesses
    numGuess = numGuess - 1
    remainGuesses.innerHTML = numGuess
}

function endGame(){
    //
}

function startGame(){
    //
}
