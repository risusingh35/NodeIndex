console.log("-------------VariableHoisting-----------------");
// var --------------- 
// allow to hoisting
console.log(varMyName);//undefined
var varMyName;

// let ---------------
// console.log(letMyName);// Cannot access 'letMyName' before initialization
let letMyName;

// const ---------------
// console.log(constMyName);// Cannot access 'constMyName' before initialization
const constMyName='abc'