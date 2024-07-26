console.log("---------AsyncAwaitOrderOfExecution---------");
async function asyncFunction() {
    console.log('A');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('B');
}

console.log('C');
asyncFunction();
console.log('D');

// order-c,a,d,b
