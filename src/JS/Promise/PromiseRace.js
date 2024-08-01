console.log("---------Promises.race---------");
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Promise 1'))
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Promise 2'))
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Promise 3'))
const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 150, 'Promise 4'))
const promise5 = new Promise((resolve, reject) => setTimeout(resolve, 10, 'Promise 5'))
const promiseArr=[promise1,promise2,promise3,promise4,promise5]
Promise.race(promiseArr).then((res)=>console.log(res)).catch((err)=>console.log(err))