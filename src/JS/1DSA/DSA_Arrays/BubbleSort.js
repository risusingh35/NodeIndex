const BubbleSort = () => {
    let arr = [77, 23, 99, 12, 1, 33]
    console.log({ arr });
    let swapped
    let loopCount = 0
    let arrLength = arr.length
    do {
        swapped = false
        for (let i = 0; i < arrLength - 1; i++) {
            loopCount++
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true
            }
        }
        arrLength--//
    } while (swapped);

    console.log({ arr });
    console.log({ loopCount });
}
export { BubbleSort }