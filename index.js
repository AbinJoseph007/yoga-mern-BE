// import .evn

require('dotenv').config()

//import express

const express = require('express')

const cors = require('cors')

// router

const router = require('./Routers/router')

//import connection.js

require('./DB/connections')

//middlware
// const appMiddleware = require('./middleware/appMiddleware')

//create server

const yogaServer = express()



yogaServer.use(cors())
// return a middleware that only parse json - javascript object
yogaServer.use(express.json())
// yogaServer.use(appMiddleware)
yogaServer.use(router)

yogaServer.use('/uploads',express.static('./uploads'))

const PORT = 5000 || process.env.PORT

yogaServer.listen(PORT, ()=>{
    console.log(`server running successfully at ${PORT}`);
})

 yogaServer.get('/',(req , res)=>{
     res.send(`<h1> your server is running waiting to accept request from client </h1> `)
})

// yogaServer.post('/',(req , res)=>{
//     res.send(`<h1> your server is running waiting to accept request from client </h1> `)
// })

