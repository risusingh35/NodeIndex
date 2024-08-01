console.log("#################-synchronous-#################");
const First=()=>console.log('First');
const Second=()=>console.log('Second');
const Thirds=()=>console.log('Thirds');
const Forth=()=>console.log('Forth');
const loopCall=()=>console.log('Loop Call')

// in synchronous code will execute to bottom ------------------------
// First()
// for (let index = 0; index < 5; index++) {
//     loopCall()
// }
// Second()
// Thirds()

// synchronous with callback ------------------------

// const fooWithCallback=(callback)=>{
//     First()
//     callback()
// }
// fooWithCallback(Thirds)

// setTimeOut ------------------------

// Second()
// setImmediate(First,0)
// Thirds()

// clearInterval setInterval setTimeout ------------------------
// First()
// const intervalId = setInterval(() => {
//     Second();
//   }, 1000);
  
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Interval stopped after 10 Second');
//   }, 5001);
//   Thirds()

// setImmediate and setTimeout ------------------------
// the order of execution between setImmediate and setTimeout with a delay of 0 can be a bit tricky because it depends on the context in which they are called. However, in most cases, setTimeout with a delay of 0 will be called before setImmediate.
// First()

// setImmediate(Second)
// setTimeout(First,0)
// Thirds()

// Process.nextTike------------------------
setImmediate(Second) //4
setTimeout(First,0) //3
Thirds() //1
process.nextTick(Forth) //2