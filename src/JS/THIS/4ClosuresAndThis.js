console.log("#################-3 ClosuresAndThis-#################");
const obj = {
    value: 10,
    getValue: function () {
        const innerFunction = function () {
            console.log(this.value);
        };
        innerFunction.call(this); // Output: 10
        innerFunction() // Output: undefined
    }
};
//   obj.getValue();


//Closure-1-------------------------------------------
function getSum(a) {
    return function (b) {
        console.log(a);
        console.log(b);
        return a + b
    }
}
const sum1 = getSum(2)
// console.log(sum1(10));
// console.log(sum1(3));


//Closure-2-------------------------------------------

function countFoo() {
    let count = 0;
    return function (){
        count += 1;
        return count
    }
}
const counter=countFoo()
console.log(counter());
console.log(counter());
console.log(counter());