import dotenv from 'dotenv';
dotenv.config();
import StartApp from './src/app.js'
const port=process.env.PORT
const StartServer = () => {
// require('./src/hello')//test file 
 const app = StartApp();
 app.listen(port, () => {
   console.log(`Server running on port ${port}`);
 });
}
StartServer()

