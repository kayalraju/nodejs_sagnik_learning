const express=require('express')
const ApiController = require('../controller/ApiController')

const router=express.Router()


router.post('/create/student',ApiController.CreateStudent)
router.get('/student',ApiController.getStudent)
router.get('/student/edit/:id',ApiController.getSingleStudent)
router.put('/student/update/:id',ApiController.updateStudent)
router.delete('/student/delete/:id',ApiController.deleteStudent)



module.exports=router