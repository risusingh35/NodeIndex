console.log('---------ArrowFunctions-----------');

// uses a concise arrow function syntax without curly braces or the return keyword
const getSum=(a,b)=>a+b
const sum=getSum(5,10)
console.log({sum});
//  uses a more verbose arrow function syntax with curly braces and an explicit return keyword
const getSquire=(a)=>{
    return a*a
}

const squire=getSquire(15)
console.log({squire});

console.log("------------arguments-------------");
console.log("------------traditionalFunction-------------");
console.log("------------arrowFunction-------------");
// 
function traditionalFunction() {
    console.log(arguments); // Logs the arguments passed to the function
}

traditionalFunction(1, 2, 3); // Logs `[1, 2, 3]`

const arrowFunction = () => {
    console.log({arguments});// the arguments object is available in the scope of the module. In Node.js,
    // (exports, require, module, __filename, __dirname)
};

arrowFunction(1, 2, 3);
