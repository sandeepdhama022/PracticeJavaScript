const randomNum = Math.floor(Math.random()*100)+1;
const form = document.querySelector('#container')
const preGuesses = document.querySelector('#PreviousGuesses')
const arrPreGuesses = []


form.addEventListener('click',function(e){
    e.preventDefault()
    console.log(randomNum)
    preGuesses.innerHTML = randomNum
    
})


function displayMessage(message){
    const msgPara = form.appendChild(document.createElement('h3'))
    msgPara.innerHTML = `<p id="msgParagraph">${message}</p>`
}

function testNumber(){

}