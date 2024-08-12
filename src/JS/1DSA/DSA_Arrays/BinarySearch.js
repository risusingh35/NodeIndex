const BinarySearch = () => {
    const arr = [2, 32, 3, 45, 42, 92]
    const el = 45
    BSearch(arr, el)
}

const BSearch = (arr, el) => {
    const sortedArray = SortArray(arr)
    Search(sortedArray, el)
}
const SortArray = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let sortedIndex = i - 1;
        let currentItem = arr[i]
        while (sortedIndex >= 0 && arr[sortedIndex] > currentItem) {
            arr[sortedIndex + 1] = arr[sortedIndex]
            sortedIndex--
        }
        arr[sortedIndex + 1] = currentItem
    }
    return arr
}
const Search = (arr, el) => {
    console.log(arr);
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)
    for (let i = 0; i < end; i++) {
        while (start <= end) {
            mid = Math.floor((start + end) / 2)
            if (arr[mid] === el) {
                console.log({ mid });
                return mid
            } else if (arr[mid] < el) {
                start = mid + 1
            } else if (arr[mid] < el) {
                end = mid - 1
            } else {
                return -1
            }
            console.log(mid);
        }
    }
}
export { BinarySearch }