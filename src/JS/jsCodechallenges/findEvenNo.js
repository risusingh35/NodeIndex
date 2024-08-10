const findEvenNo = (start = 0, end = 10) => {
    if (start % 2 !== 0) start++
    for (let i = start; i <= end; i += 2) {
        console.log({ i })
    }
}

export { findEvenNo }