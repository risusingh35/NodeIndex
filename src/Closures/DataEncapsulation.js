function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++
            console.log(count);
        },
        decrement: function () {
            count--
            console.log(count);
        },
        getCount: function () {
          return count
        },
    }
}
const counter=createCounter()
counter.decrement()
console.log(counter.getCount());
counter.increment()
counter.increment()
