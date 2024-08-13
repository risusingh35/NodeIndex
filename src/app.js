import {JsIndex} from './JS/jsIndex.js'
import getAllUsers from './mongodb/mongoIndex.js'
import {connectDB} from './db/mongo.js'
import express from 'express'
import { Hello } from './hello.js'

const StartApp = () => {
    Hello()
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