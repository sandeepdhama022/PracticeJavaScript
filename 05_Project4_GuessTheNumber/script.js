// Select Elements of the Game
const form = document.querySelector('#container');
const userInput = document.querySelector('#txtGuess');
const submit = document.querySelector('#btnSubmit');
const resultSection = document.querySelector('#resultInfo');
const preGuesses = document.querySelector('#PrevGuesses');
const remainGuesses = document.querySelector('#remAttempts');
const suggestion = document.querySelector('.suggestion')

// Set Essentials
let randomNum = Math.floor(Math.random()*100)+1;
let arrPrevGuesses = [];
let numGuess = 10;
remainGuesses.innerHTML = numGuess
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

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

function checkGuess(guess){
    userInput.value = ''
    if(remainGuesses.innerHTML <= 1){
        endGame()
        createStartLink(`Game Over!! Random Number was ${randomNum}`)
        return;
    }
    if(guess === randomNum){
        endGame()
        createStartLink('You Won!!')
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
    arrPrevGuesses = []
    playGame = false;
    preGuesses.innerHTML = ''
    remainGuesses.innerHTML = ''
    userInput.setAttribute('disabled','')
}

function startGame(){
    randomNum = Math.floor(Math.random()*100)+1;
    arrPrevGuesses = [];
    numGuess = 10;
    remainGuesses.innerHTML = numGuess
    suggestion.innerHTML = ''
    userInput.removeAttribute('disabled')
    playGame = true;
}

function showAlert(message){
    suggestion.innerHTML = message
}

function createStartLink(infoMsg){
    suggestion.innerHTML = `${infoMsg} to Start a New Game, <span id="newGame">Click Here</span>`
    let newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function(e){
        startGame()
    })
}