//import modal

const classes = require('../model/classSchema')

exports.addclass = async (req,res)=>{
  console.log('inside project add controller');

  const teacherId = req.payload
  console.log(teacherId);

  const classImage = req.file.filename
  console.log(classImage);

  const{classname,classtype,agelimit,link}= req.body

  console.log(`${classname},${classtype},${agelimit},${link},${classImage},${teacherId}`);

  try {
    const existingClass = await classes.findOne({link})

    if(existingClass){
      res.status(406).json('class already Exist....please upload a new class')
    }
    else{
      const newClass = new classes({
        classname,
        classtype,
        agelimit,
        link,
        classImage,
        teacherId
      })
      await newClass.save()
      res.status(200).json(newClass)
    }

  } catch (err) {
    req.status(401).json(`request failed due to ${err}`)
  }

  
}

//get class

exports.getallClass = async (req,res)=>{

  const search = req.query.search
  console.log(search);

  const query = {
   classname:{
    $regex:search,$options:'i'
   }
  }
    
  try {
    const allClass = await classes.find(query)
    res.status(200).json(allClass)
  } catch (err) {
    res.status(401).json(`request failed because${err}`)
  }
}

exports.getteacherClass = async (req,res)=>{

  const teacherId = req.payload

  try {
    const teacherClass = await classes.find({teacherId})
    res.status(200).json(teacherClass)
  } catch (err) {
    res.status(401).json(`err acured beacuase ${err}`)
  }
}

//edit class

exports.editTeacherClass = async (req,res,)=>{
  const {id} = req.params
    const teacherId = req.payload
    const {classname,classtype,agelimit,link,classImage} = req.body
    const uploadedClassImage = req.file?req.file.filename:classImage

    try {
      const updateClass = await classes.findByIdAndUpdate({_id:id},{classname,classtype,agelimit,link,classImage:uploadedClassImage,teacherId},{new:true})

      await updateClass.save()
      res.status(200).json(updateClass)
    } catch (err) {
      res.status(401).json(err)
    }

}


exports.deleteClass = async(req,res)=>{
  const {id} = req.params

  try {
     const removeClass = await classes.findByIdAndDelete({_id:id})
     res.status(200).json(removeClass)
  } catch (err) {
     res.status(401).json(err)
  }
}