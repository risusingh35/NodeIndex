const Quicksort = () => {
    const array = [99, 1, 2, 3, 12, -6, 8, 100,]

    console.log(QSort(array));

}
const QSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    const pivotIndex = arr.length - 1;
    const pivotValue = arr[pivotIndex];
    let leftArr = []
    let rightArr = []
    for (let i = 0; i < pivotIndex; i++) {
        if (arr[i] < pivotValue) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }
    return [...QSort(leftArr), pivotValue, ...QSort(rightArr)]
}
export { Quicksort }