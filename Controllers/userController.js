// logic to resolve the request 

//import model 

const users = require('../model/userSchema')

// import jwt
const jwt = require('jsonwebtoken')

//register request

exports.register = async (req,res)=>{
     //get 
    const {username,email,password,phonenumber}=req.body
    
     try{const exitsUser = await users.findOne({email})

     if(exitsUser){
        res.status(406).json('Account Already exist ....please Login')
     }
     else{

        //

        const newUser = new users({
            username,
            email,
            password,
            phonenumber,
            age:"",
            height:"",
            weight:""


        })
        await newUser.save()
        
        res.status(200).json(newUser)
     }
    }catch(err){
        res.status(401).json(`resgister failed due to ${err}`)
    }
    
  
}

// login request

exports.login = async (req,res)=>{
    const {email,password}=req.body

   try{ const exitstingUser = await users.findOne({email,password})
    console.log(exitstingUser);

    if(exitstingUser){

        //jwt token
       const token = jwt.sign({userId:exitstingUser._id},"superman007")

        res.status(200).json({
            exitstingUser,
            token
        })

    }
    else{
        res.status(404).json('invalid emailid or password')
    }}catch(err){
        res.status(401).json(`login request failed due to ${err}`);
    }
}