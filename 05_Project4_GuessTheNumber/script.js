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

function validateGuess(){
    //
}

function checkGuess(){
    //
}

function displayMessage(){
//
}



form.addEventListener('click',function(e){
    e.preventDefault()
    console.log(randomNum)
    preGuesses.innerHTML = randomNum
    
})

