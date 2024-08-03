require('./JS/jsIndex')
const {getAllUsers} =require('./mongodb/mongoIndex')
const connectDB=require('./db/mongo')
const express = require('express')
const StartApp = () => {
    const app = express()
    connectDB()//connect to mongodb
    app.get('/', (req, res) => {
        getAllUsers()
        res.send('Hello World!')
    })
    
    return app
}

module.exports=StartApp