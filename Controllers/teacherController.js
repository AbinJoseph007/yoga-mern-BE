
// import modal

const teachers = require('../model/teacherSchema')

const jwt = require('jsonwebtoken')


exports.teregister = async (req,res)=>{

    const{tutorname,email,password,phonenumber,specialization,}= req.body

     try {const exitsTeacher =  await teachers.findOne({email})

    if(exitsTeacher){
        res.status(406).json('Account Already exist ....please Login')
     }else{
        const newTeacher = new teachers({
            tutorname,
            email,
            password,
            phonenumber,
            specialization,
            experience:"",
            instgram:"",
            profile:""


        })
        //    add to mongodb
        await newTeacher.save()

        res.status(200).json(newTeacher)

     }}
     catch(err){
        res.status(401).json(`res req failed due to ${err}`)
     }
}

//login

exports.telogin = async (req,res)=>{
   const {email,password} = req.body

   try{const exitstingteacher = await teachers.findOne({email,password})
   console.log(exitstingteacher);

   if(exitstingteacher){
      //jwt
      const tokens = jwt.sign({teacherId:exitstingteacher._id},"superteacher")

      res.status(200).json({
         exitstingteacher,
         tokens
      })
   }
   else{
      res.status(404).json("invalid email or password")
   }}catch(err){
      res.status(401).json(`login request failed due to ${err}`);
   }
}



exports.editTeacher =async (req,res)=>{
   const teacherId = req.payload
   const {
      tutorname,
      email,
      password,
      phonenumber,
      specialization,
      experience,
      instgram,
      profile} = req.body

   const profileImage = req.file?req.file.filename:profile

   try {
      const updateTeacher = await  teachers.findOneAndUpdate({_id:teacherId},{tutorname,email,password,phonenumber,specialization,experience,instgram,profile:profileImage},{new:true})

      await updateTeacher.save()
      res.status(200).json(updateTeacher)
   } catch (err) {
      res.status(401).json(err)
   }

}


exports.getallTeacher = async (req,res)=>{

   
     
   try {
     const allteachers = await teachers.find()
     res.status(200).json(allteachers)
   } catch (err) {
     res.status(401).json(`request failed because${err}`)
   }
 }