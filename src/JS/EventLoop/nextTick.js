console.log("---------nextTick---------");
const fs = require('fs')
const path = require('path')
const fileName = 'example.txt';
const currentDir = __dirname
const filePath = path.join(currentDir, fileName)
setImmediate(() => { console.log('setImmediate', 1) })
setTimeout(() => { console.log('setTimeout', 2) })
process.nextTick(() => { console.log('nextTick', 3) })

fs.readFile((filePath), (err, data) => {
    setImmediate(() => { console.log('setImmediate', 1) })
    setTimeout(() => { console.log('setTimeout', 2) })
    process.nextTick(() => { console.log('nextTick', 3) })
    if (err) {
        console.log('Error while reading File', err);
    } else {
        console.log("File data", data.toString());
    }
})