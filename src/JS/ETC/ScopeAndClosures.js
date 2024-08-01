console.log("---------ScopeAndClosures---------");
function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // ? 
console.log(counter.increment()); // ? 
console.log(counter.decrement()); // ? 
