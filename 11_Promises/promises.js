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
