const express = require("express")
const ConnectDb = require("./Config/ConnectDB")
const ContactRouter = require("./Route/Contact")
const app=express()
require('dotenv').config()

ConnectDb()

app.use(express.json())
app.use('/api/Contact',ContactRouter)






app.listen(process.env.port,console.log('server is running on port 5000'))