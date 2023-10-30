const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let intervalId;

// Generate random color
function genRandomColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    changeBGColor(color)
}

// Apply color to body
function changeBGColor(hexCode){
    document.body.style.backgroundColor = hexCode;
}

// Handler to start changing the color
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(genRandomColor, 1000);
    }
}

// Handler to stop changing the color
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

// Event Listeners to start and stop changing the color
start.addEventListener('click',startChangingColor)
stop.addEventListener('click',stopChangingColor)
