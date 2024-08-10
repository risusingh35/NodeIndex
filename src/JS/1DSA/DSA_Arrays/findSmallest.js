
const findSmallest = () => {
    const arr = [11, 7, 2, 13, 44, 5]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    console.log(min);
    
}
export {findSmallest}