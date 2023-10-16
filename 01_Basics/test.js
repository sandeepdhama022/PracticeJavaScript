// const name = "Sandeep Dhama";
// const age = 30;

// console.log(`Hello! My name is ${name} and I'm ${age} years old.`)

const myCoding = [
    {
        language: 'HTML',
        extention: 'html'
    },
    {
        language: 'CSS',
        extention: 'css'
    },
    {
        language: 'JavaScript',
        extention: 'js'
    }
]

myCoding.forEach( (item,index,arr) => {
    // console.log(arr);
    console.log(`Extension for ${item.language} file is ${item.extention}`);
} )