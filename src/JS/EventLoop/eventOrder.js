console.log("---------Event Order---------");
const eventOrderFunction = () => {
    const fs = require('fs');
    const path = require('path');

    const currentDir = __dirname
    const fileName = 'example.txt'
    const filePath = path.join(currentDir, fileName)


    console.log('Start--------');
 
    setImmediate(() => console.log('setImmediate 2'))
    setTimeout(() => {
        console.log('setTimeout 1');
    }, 0)
  

    fs.readFile(filePath, (err, data) => {
        setImmediate(() => console.log('setImmediate 3'))
        setTimeout(() => {
            console.log('setTimeout 4');
        }, 0)
        setImmediate(() => console.log('setImmediate 5'))
        setTimeout(() => {
            console.log('setTimeout 6');
        }, 0)
        if (err) {
            console.log('Error while reading file', err);
        } else {
            console.log(data.toString());
        }
    })
    console.log('end--------');
}
module.exports=eventOrderFunction
