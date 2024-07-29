console.log("-------------FunctionHoisting-----------------");
// Function declaration----------------------------
FunctionHoisting()//no any error
function FunctionHoisting() {
    console.log('I am FunctionHoisting');
}
// Function expression--------------------------------
// hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function
var hoistedFunctionExpression = function() {
  console.log('I am not hoisted');
};
hoistedFunctionExpression();

// Class Hoisting:--------------------------------
// const myClassInstance = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    this.name = 'Hoisted class';
  }
}
const myClassInstance = new MyClass(); 
console.log(myClassInstance);