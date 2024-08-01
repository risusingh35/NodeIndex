console.log("---------Promises.all---------");
const promise1=Promise.resolve('promise1 resolve')
const promise2=Promise.resolve('promise2 resolve')
const promise3=Promise.resolve('promise3 resolve')
const promise4=Promise.resolve('promise4 resolve')
// const promise4=Promise.reject('promise4 reject')
const promiseArr=[promise1,promise2,promise3,promise4]
Promise.all(promiseArr).then((res)=>console.log(res)).catch((err)=>console.log(err))