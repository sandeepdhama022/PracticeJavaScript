const form = document.querySelector('#form')


form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    console.log(height);
    console.log(weight);

    if(isNaN(height)){
        result.innerHTML = 'Please enter a valid height'
        return;
    }
    if(isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight'
        return;
    }


    const bmi = (weight / ((height*height)/10000)).toFixed(2)

    result.innerHTML = `BMI is ${bmi}`

})