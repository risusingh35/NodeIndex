import {JsIndex} from './JS/jsIndex.js'
import getAllUsers from './mongodb/mongoIndex.js'
import {connectDB} from './db/mongo.js'
import express from 'express'
const StartApp = () => {
    const app = express()
    // connectDB()//connect to mongodb
    // getAllUsers()
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    // JsIndex()
    return app
}

export default StartApp