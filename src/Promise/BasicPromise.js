console.log("---------Basic Promise---------");
let isSuccess = false//change the value to true for resolve
const myPromise = new Promise((resolve, reject) => {
    if (isSuccess) {
        resolve('Promise Resolve')
    } else {
        reject('Promise Reject')
    }
})
myPromise.then((res) => console.log(res)).catch((err) => console.log(err))
// const result= myPromise
// console.log(result);