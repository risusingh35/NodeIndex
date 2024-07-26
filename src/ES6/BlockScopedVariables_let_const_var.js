// var
// Scope: Function-scoped. If declared within a function, it's only accessible within that function. If declared outside, it's globally scoped.
// Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// Re-declaration: Can be re-declared within the same scope without causing an error.
console.log("-------------Var-----------------");
 const varExample=()=> {
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10
    
    if (true) {
        var b = 20; // Function-scoped
        var a=100;
        console.log(a); // 100
    }
    console.log(b); // 20
}
varExample();
// uncomment the below code to see the error 
// console.log(b); // ReferenceError: b is not defined
console.log("-------------let-----------------");
// Scope: Block-scoped. Accessible only within the block it is defined, including functions, loops, and conditionals.
// Hoisting: Variables declared with let are hoisted but not initialized. Accessing them before declaration results in a ReferenceError.
// Re-declaration: Cannot be re-declared within the same scope.
const letExample=()=> {
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    console.log(x); // 10

    if (true) {
        let y = 20; // Block-scoped
        console.log(y); // 20
    }
    // console.log(y); // ReferenceError: y is not defined
}

letExample();

console.log("-------------const-----------------");

// Scope: Block-scoped, similar to let.
// Hoisting: Variables declared with const are hoisted but not initialized. Accessing them before declaration results in a ReferenceError.
// Re-declaration and Re-assignment: Cannot be re-declared or re-assigned after their initial assignment. However, if the variable holds an object or array, the contents of the object or array can be modified.
function constExample() {
    // console.log(z); // ReferenceError: Cannot access 'z' before initialization
    const z = 30;
    console.log(z); // 30

    // z = 40; // TypeError: Assignment to constant variable.

    const obj = { a: 1 };
    obj.a = 2; // Allowed: Modifying object properties
    console.log(obj.a); // 2

    if (true) {
        const w = 50; // Block-scoped
        console.log(w); // 50
    }
    // console.log(w); // ReferenceError: w is not defined
}

constExample();
