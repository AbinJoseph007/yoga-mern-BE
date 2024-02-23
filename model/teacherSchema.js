
const mongoose = require('mongoose')


//create schema
const teacherSchema = new mongoose.Schema({
    tutorname:{
        type:String,
        require:true,
        min:[3,'must be atleast 3 characters but got {VALUE}']
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
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
    specialization:{
        type:String,
        require:true
    },
    experience:{
        type:String
    },
    instgram:{
        type:String
    },
    profile:{
        type:String
    }
})



const teachers = mongoose.model("teachers",teacherSchema )

//exports
module.exports = teachers