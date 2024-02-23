const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    classname:{
        type:String,
        require:true
    },
    classtype:{
        type:String,
        require:true
    },
    agelimit:{
        type:String,
        require:true 
    },
    link:{
        type:String,
        require:true
    },
    classImage:{
        type:String,
        require:true
    },
    teacherId:{
        type:String,  
        require:true
    }
})

const classes = mongoose.model("classes",classSchema)

module.exports =classes