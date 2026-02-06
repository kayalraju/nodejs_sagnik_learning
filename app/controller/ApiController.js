const Student=require('../models/student')
const Status = require('../utils/StatusCode')

class ApiController{
    async CreateStudent(req,res){
        try{
            const {name,email,phone}=req.body
            const student=new Student({
                name,
                email,
                phone
            })

           const data= await student.save()
            return res.status(Status.OK).json({
                status:true,
                message:"data added successfully",
                data:data
            })

        }catch(error){
            return res.status(Status.SERVER_ERROR).json({
                status:false,
                message:error.message
            })
        }

    }

    async getStudent(req,res){
        try{
            const data=await Student.find()
            return res.status(200).json({
                status:true,
                message:"data fetched successfully",
                data:data
            })
        }catch(error){
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }


    async getSingleStudent(req,res){
        try{
            const id=req.params.id
            const existID=await Student.findOne({_id:id})
            if(!existID){
                return res.status(404).json({
                    status:false,
                    message:"data not found"
                })
            }
            const data=await Student.findById(id)
            return res.status(200).json({
                status:true,
                message:"data single",
                data:data
            })
        }catch(error){
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }


    async updateStudent(req,res){
        try{
            const id=req.params.id
            const existID=await Student.findOne({_id:id})
            if(!existID){
                return res.status(404).json({
                    status:false,
                    message:"data not found"
                })
            }

            //const{name,email,phone}=req.body
            const data=await Student.findByIdAndUpdate(id,req.body,{new:true})
            return res.status(200).json({
                status:true,
                message:"data updated successfully",
            })
        }catch(error){
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }

    async deleteStudent(req,res){
        try{
            const id=req.params.id
            const existID=await Student.findOne({_id:id})
            if(!existID){
                return res.status(404).json({
                    status:false,
                    message:"data not found"
                })
            }
            const data=await Student.findByIdAndDelete(id)
            return res.status(200).json({
                status:true,
                message:"data deleted successfully",
            })
        }catch(error){
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }
}


module.exports=new ApiController()