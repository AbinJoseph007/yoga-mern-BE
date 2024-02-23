// import mangosse 

const mongoose = require('mongoose')

// access connection string 

const connectionString = process.env.DATABASE

// connect server with the mongo db

mongoose.connect(connectionString).then((res)=>{
    console.log('mongodb connected successfully');
}).catch((err)=>{
    console.log(`mongodb connection failed due to:${err}`);
})