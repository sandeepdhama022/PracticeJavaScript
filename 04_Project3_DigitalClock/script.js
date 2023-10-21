const dt = document.querySelector('#dtContainer')

setInterval(function(){
    let date = new Date
    console.log(date.toLocaleTimeString())
    dt.innerHTML = date.toLocaleTimeString()
},1000)