console.log("---------PromisesChainingAndErrorHandling---------");

new Promise((resolve, reject) => {
    resolve('Success');
})
.then(result => {
    console.log(result);
    return 'Next Success';
})
.then(result => {
    console.log(result);
    throw new Error('Failure');
})
.catch(error => {
    console.log(error.message);
    return 'Recovered';
})
.then(result => {
    console.log(result);
});
