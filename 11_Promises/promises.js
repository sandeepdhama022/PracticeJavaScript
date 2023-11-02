// Creating and Consuming Promises
// Tareeka Number 1
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Task 1 is completed');
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log('Executed after the completion of the Task 1');
})

// Tareeka Number 2

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Task 2 is completed');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Executed after the completion of the Task 2');
})

// Tareeka Number 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Task 3 is completed');
        resolve({firstName : 'Sandeep', lastName : 'Dhama'})
    }, 1000);
})

promiseThree.then(function(name){
    console.log(name)
    return name.firstName
}).then(function(fName){
    console.log(fName)
})

// Tareeka Number 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : 'sandeepdhama022', password : '12345'})
        } else {
            reject('Something went wrong')
        }
    }, 1000);
})

promiseFour
.then(function(userData){
    console.log(userData);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log('Task 4 Finally Completed');
})

// Tareeka Number 5
