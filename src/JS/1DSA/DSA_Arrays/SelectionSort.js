const SelectionSort = () => {
    let arr = [20, 23, 1, 32, 66, 18, 9, 10, 88]

    console.log(arr);
    for (let i = 0; i < arr.length; i++) {

        let maxIndex = i
        let nextIndex = i + 1

        do {
            if (arr[maxIndex] < arr[nextIndex]) {
                maxIndex = nextIndex
            }
            nextIndex++
        } while (nextIndex < arr.length);

        if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
        }
    }
    console.log(arr);
}
export { SelectionSort }