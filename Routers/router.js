//setup path to resolve request

// 1) import express module

const express = require('express')

const userController = require('../Controllers/userController')
const teacherController = require('../Controllers/teacherController')

const classController = require('../Controllers/classController')

const jwtmiddleware = require('../middleware/jwtmiddleware')

const multerConfig = require('../middleware/multermiddleware')

const middlewarejwt = require('../middleware/middlewarejwt')

// create an object for router class inside express module
const router = new express.Router()

// set up path to resolve request 

//    a) register
      router.post('/users/register',userController.register)

      // b) login
      router.post('/users/login',userController.login)

      // teacher login
      router.post('/teachers/teregister',teacherController.teregister)

      //teacherlogin
      router.post('/teachers/telogin',teacherController.telogin)

      //add project
      router.post('/class/add',jwtmiddleware,multerConfig.single('classImage'),classController.addclass)

      // all classes
      router.get('/classes/all-class',middlewarejwt,classController.getallClass)

      //teacher class
      router.get('/teacher/all-class',jwtmiddleware,classController.getteacherClass)

      //get teacher
      router.get('/teachers/all-teachers',middlewarejwt,teacherController.getallTeacher)

      //edit
      router.put('/classes/edit/:id',jwtmiddleware,multerConfig.single('classImage'),classController.editTeacherClass)

      //delete
      router.delete('/classes/remove/:id',jwtmiddleware,classController.deleteClass)
      //
      router.put('/teacher/edit',jwtmiddleware,multerConfig.single('profile'),teacherController.editTeacher)



// 4) export router
module.exports = router