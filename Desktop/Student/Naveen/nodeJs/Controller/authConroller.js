const {UserModel } = require('../model/User');
const ForgetPasswordList = require('../model/forgetPasswordList');

const register=async(req,res)=>{
    const data = req.body
    console.log(data);
    try {
        const newUser = await UserModel.create(data);
        res.send({message:'User created successfully!'})
    } catch (error) {
        res.status(500).send({message:"User created failed",success:true,error:error.message})
    }
}

const forgetPassword =async(req,res)=> {
    const data = req.body
    const { id } = req.params
    const currentUser =await UserModel.findById(id)
    console.log(currentUser);
    const count = await ForgetPasswordList.find({ _id: id }).countDocuments()
    console.log(count);
    
    
    
    res.send({message:'Password changed successfully!'})
}

module.exports={register,forgetPassword}