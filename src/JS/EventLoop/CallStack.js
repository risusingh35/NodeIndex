const fs = require('fs');
const path = require('path');

const fileName = 'example.txt';
const content = 'Hello, this is some content!';
// Get the current directory path
const currentDir = __dirname;
// Define the full path of the new file
const filePath = path.join(currentDir, fileName);

console.log("#################### code Start Here  it gets pushed to the call stack and its end or a return statement, it is popped off the stack");//it gets pushed to the call stack and its end or a return statement, it is popped off the stack

console.log("#################### fs.writeFile push to callStack");
console.log("While Libuv handles the query in the background, our JavaScript is not blocked and can continue with console.log(”Before query result”)");
// Write the content to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log(`File '${fileName}' created successfully at '${currentDir}' with content: '${content}'`);
});

console.log("Before fs/query result")