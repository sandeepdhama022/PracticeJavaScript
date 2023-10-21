const form = document.querySelector('#form')


form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const range = document.querySelector('#range')

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
    let rangeResult = "";

    if(bmi < 18.6){
        rangeResult = 'You are under weight';
    } else if (bmi >= 18.6 && bmi <= 24.9){
        rangeResult = 'You are normal';
    } else if(bmi > 24.9){
        rangeResult = 'You are over weight'
    }

    result.innerHTML = `BMI is ${bmi}`
    range.innerHTML = rangeResult

})