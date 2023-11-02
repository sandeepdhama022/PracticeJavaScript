const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Task 1 is completed');
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log('Executed after the completion of the Task 1');
})