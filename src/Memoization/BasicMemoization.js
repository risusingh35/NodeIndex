console.log("---------BasicMemoization---------");
// Recursive Approach to find factorial--------------------------
function findFactorialRecursive(num) {
    console.log(num);
    if (num === 0 || num === 1) {
        return 1
    }
    return num * findFactorialRecursive(num - 1)
}
// const result1 = findFactorialRecursive(5)
// console.log({ result1 });


// Iterative Approach--------------------------------------------
function findFactorialIterative(num) {
    let result = 1
    for (let index = 2; index <= num; index++) {
        result *= index
    }
    return result
}
// const result2=findFactorialIterative(5)
// console.log({result2});

// Memoization  ---------------------------------------------------
function findFactorialWithMemoization() {
    const memo = {}
    function factorial(num) {
        console.log(num in memo);
        if (num in memo) {
            return memo[num]
        }
        if (num === 0 || num === 1) {
            return 1;
        }
        memo[num]=num* factorial(num-1)
        console.log(memo);
        return memo[num]
    }
    return factorial
}
const findFactorial=findFactorialWithMemoization()
// const result3=findFactorial(10)
// const result4=findFactorial(9)
// console.log({result3});
// console.log({result4});