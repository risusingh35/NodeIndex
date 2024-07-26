console.log("---------Promise.any---------");
const promise1 = new Promise((resolve, reject) => reject('Promise 1 reject'))
const promise2 = new Promise((resolve, reject) => reject('Promise 2 reject'))
const promise3 = new Promise((resolve, reject) => resolve('Promise 3 resolve'))
const promise4 = new Promise((resolve, reject) => reject('Promise 4 reject'))
const promise5 = new Promise((resolve, reject) => resolve('Promise 5 resolve'))
const promiseArr = [promise1, promise2, promise3, promise4, promise5]
Promise.any(promiseArr).then((res) => console.log(res)).catch((err) => console.log(err))