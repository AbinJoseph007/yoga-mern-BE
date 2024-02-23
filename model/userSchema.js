// import mongoose
const mongoose = require('mongoose')

//create schema
//

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:[3,'must be atleast 3 characters but got{VALUE}']
    },
    email:{
        type:String,
        require:true,
        unique:true,
        //if the input value is not email id he throw the error and return invalid email.
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password:{
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true 
    },
    age:{
       type:Number,
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    }
})

const users = mongoose.model("users",userSchema)

//export schema
module.exports = users
