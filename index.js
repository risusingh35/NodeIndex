const mongoose = require('mongoose');
require('dotenv').config()
const StartApp = require('./src/app')
const port=process.env.PORT
const StartServer = () => {
require('./src/hello')
//  const app = StartApp();
//  app.listen(port, () => {
//    console.log(`Server running on port ${port}`);
//  });
}
StartServer()
