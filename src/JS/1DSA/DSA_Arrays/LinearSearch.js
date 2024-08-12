const LinearSearch = () => {
    const arr = [2, 4, 5, 3, 61, 98]
    const resultIndex = startSearch(arr, 3)
    console.log({resultIndex});
}

const startSearch = (array, findElement) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === findElement) {
            return i
        }

    }
}

export { LinearSearch }
