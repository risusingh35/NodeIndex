// ParallelExecutionOfAsynchronousOperations.
console.log("---------Asynchronous Operations---------");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const getData1 = async () => {
    await delay(1000)
    // console.log('getData1');
    return 'getData1';
}
const getData2 = async () => {
    await delay(1000)
    // console.log('getData2');
    return 'getData2';
}

// 1. Sequential Execution of Asynchronous Operations
const fetchInSequential = async () => {
    console.log('Sequential-Logging after 2 second');
    const d1 = await getData1()
    const d2 = await getData2()
    console.log('Sequential', {
        d1, d2
    });
}
fetchInSequential()

// 2. Parallel Execution of Asynchronous Operations
const fetchInParallel = async () => {
    const [d1, d2]  = await Promise.all([getData1(), getData2()])
    console.log('Parallel-Logging after 1 second');
    console.log('Parallel', {
        d1, d2
    });
}
fetchInParallel()

