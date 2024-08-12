// Shift elements to the right in the array
function shiftElementsRight(array, left, position) {
    let j = position;
    while (j >= left) {
        array[j + 1] = array[j];
        j--;
    }
}

// Inserts an element into its correct position
function insertElement(array, left, position, temp) {
    shiftElementsRight(array, left, position - 1);
    array[left] = temp;
}

// Insertion Sort Function
function insertionSort(array, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= left && array[j] > temp) {
            j--;
        }
        insertElement(array, j + 1, i, temp);
    }
}

// Creates a sub-array from the main array
function createSubArray(array, start, length) {
    let subArray = new Array(length);
    for (let i = 0; i < length; i++) {
        subArray[i] = array[start + i];
    }
    return subArray;
}

// Merges two sub-arrays into the main array
function mergeSubArrays(array, leftArr, rightArr, left, right) {
    let i = 0, j = 0, k = left;
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            array[k] = leftArr[i];
            i++;
        } else {
            array[k] = rightArr[j];
            j++;
        }
        k++;
    }
    while (i < leftArr.length) array[k++] = leftArr[i++];
    while (j < rightArr.length) array[k++] = rightArr[j++];
}

// Merge Function
function merge(array, left, mid, right) {
    let leftArr = createSubArray(array, left, mid - left + 1);
    let rightArr = createSubArray(array, mid + 1, right - mid);

    mergeSubArrays(array, leftArr, rightArr, left, right);
}

// Sort Runs Function
function sortRuns(array, minRun) {
    let n = array.length;
    for (let i = 0; i < n; i += minRun) {
        insertionSort(array, i, Math.min(i + minRun - 1, n - 1));
    }
}

// Merge Runs Function
function mergeRuns(array, minRun) {
    let n = array.length;
    for (let size = minRun; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid = Math.min(left + size - 1, n - 1);
            let right = Math.min(left + 2 * size - 1, n - 1);
            if (mid < right) {
                merge(array, left, mid, right);
            }
        }
    }
}

// Main Timsort Function
function timSort(array) {
    const MIN_RUN = 32;  // Minimum run size
    sortRuns(array, MIN_RUN);
    mergeRuns(array, MIN_RUN);
    return array;
}

// Example Usage: Call the timSort function
const TimeSort = () => {
    let arr = [5, 21, 7, 23, 19, 3, 17, 12]; // Sample input array
    console.log("Original array:", arr);
    let sortedArray = timSort(arr);
    console.log("Sorted array:", sortedArray);
}

export { TimeSort }
