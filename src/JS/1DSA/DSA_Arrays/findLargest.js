const findLargest = () => {
    let arr = [22, 4, 72, 99, 12, 35]
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    console.log({max});
    
}
export { findLargest }