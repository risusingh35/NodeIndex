console.log('---------ArrowFunctions-----------');
// uses a concise arrow function syntax without curly braces or the return keyword
console.log("1 Single Parameter without Parentheses:");
const greet = name => `Hello, ${name}`;
console.log(greet('RIsu Singh'));

console.log("2 Multiple Parameters with Parentheses:");
const getSum=(a,b)=>a+b
const sum=getSum(5,10)
console.log({sum});

console.log("3 uses a more verbose arrow function syntax with curly braces and an explicit return keyword");
const getSquire=(a)=>{
    return a*a
}
const squire=getSquire(15)
console.log({squire});

console.log("4 Arrow Functions as Immediately Invoked Function Expressions (IIFEs)");
(()=>console.log("This runs immediately!"))()

console.log("5 Arrow Functions with Default Parameters")
const getMyName=(name='RK Singh')=>console.log('My Name is',name)
getMyName()
getMyName("Risu Singh")
console.log("6 arguments in traditional and arrow Function")
function traditionalFunction() {
    console.log(arguments); // Logs the arguments passed to the function
}
traditionalFunction(1, 2, 3); // Logs `[1, 2, 3]`
const arrowFunction = () => {
    // console.log({arguments});// the arguments object is available in the scope of the module. In Node.js,
    // (exports, require, module, __filename, __dirname)
};
arrowFunction(1, 2, 3);

console.log("7 Rest Parameters with Arrow Functions");
const restArg=(...rest)=>console.log({rest})
restArg(1,2,3)
