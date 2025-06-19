const mongoose=require('mongoose')


const forgetPasswordSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        required:true
    },
    changedpassword: {
        type: String,
        required:true
    },
    changeCount:{
        type: Number,
        default:0
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }
})

const ForgetPasswordList = mongoose.model('forgetPasswordList', forgetPasswordSchema)

module.exports=ForgetPasswordList