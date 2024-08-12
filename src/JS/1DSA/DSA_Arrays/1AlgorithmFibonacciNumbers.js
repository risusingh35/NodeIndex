// Algorithm Fibonacci Numbers -1
const forLoop = (maxLimit, first = 0, second = 1) => {
    console.log(first);
    console.log(second);

    for (let i = 0; i < maxLimit - 2; i++) {
        const third = first + second
        first = second
        second = third
        console.log(third);
    }
}

const doWhileLoop = (maxLimit, first = 0, second = 1) => {
    console.log(first);
    console.log(second);
    do {
        let result = first + second
        console.log(result);
        first = second
        second = result
        maxLimit--
    } while (maxLimit > 2);
}

const recursionFunction = (maxLimit, first = 0, second = 1) => {
    console.log(first);
    if (maxLimit > 1) {
        return recursionFunction(maxLimit - 1, second, first + second)
    }
}
const AlgorithmFibonacciNumbers = () => {
    // forLoop(12)
    // doWhileLoop(12, 0, 1)
    // recursionFunction(12)
}
export { AlgorithmFibonacciNumbers }
// Summary
// Best in Terms of Time and Space Complexity: The for loop and do-while loop methods are the most efficient in terms of both time and space complexity. They both have O(n) time complexity and O(1) space complexity.
// Less Efficient: The recursive method has O(n) time complexity but O(n) space complexity due to the stack usage. It is less efficient compared to iterative solutions for large input sizes.
// Recommended Approach:

// For generating Fibonacci numbers, the for loop method is generally the most straightforward and efficient approach, making it the best choice among the three.