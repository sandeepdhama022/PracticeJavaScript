const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
let printDateId;

function printDate(str) {
    console.log(Date(),str)
}

startButton.addEventListener('click',function(){
    printDateId = setInterval(printDate,1000,'Sandeep');
})

stopButton.addEventListener('click',function(){
    clearInterval(printDateId)
})
