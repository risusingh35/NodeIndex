console.log("---------Promise---------");

const callMyPromise=()=>{
    return new Promise((resolve,reject)=>{
        if (Math.random()>0.5) {
            resolve('My Promise Resolved')
        } else {
            reject('My promise rejected')
        }
    })
}
callMyPromise().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('Finally promise execution completed');
})