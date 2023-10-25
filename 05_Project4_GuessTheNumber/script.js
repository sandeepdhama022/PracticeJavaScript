const randomNum = Math.random();
const form = document.querySelector('container')

form.addEventListener('click',function(e){
    e.preventDefault()
    console.log(Math.round(randomNum*100))
})