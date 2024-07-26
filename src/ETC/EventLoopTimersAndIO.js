console.log("---------EventLoopTimersAndIO---------");
// const fs = require('fs');



// fs.readFile('file.txt', () => {
//     console.log('File Read');
// });
setTimeout(() => {
    console.log('Timeout');
}, 0);
setImmediate(() => {
    console.log('Immediate');
});

// console.log('End');
