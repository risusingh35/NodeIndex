const InsertionSort = () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 0]
    let outerLoopCount = 0; // To count the number of times the outer loop runs
    let innerLoopCount = 0; // To count the number of times the inner loop runs
    for (let i = 0; i < array.length; i++) {
        let sortedIndex = i - 1
        outerLoopCount++
        let currentItem = array[i]
        while (sortedIndex >= 0 && array[sortedIndex] > currentItem) {
            array[sortedIndex + 1] = array[sortedIndex]
            sortedIndex--
            innerLoopCount++
        }
        array[sortedIndex + 1] = currentItem
        console.log({ i });

    }

    console.log(array, { loopCount: innerLoopCount + outerLoopCount });
}
export { InsertionSort }