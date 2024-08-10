// Example usage:

const search = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Target not found
};
const binarySearch = () => {
    const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
    const target = 11;
    const result = search(sortedArray, target);
    console.log(result);
}

export { binarySearch }