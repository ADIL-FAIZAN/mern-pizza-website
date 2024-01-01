const mongoose=require('mongoose')

//RegisteruserSchema
const loginUserSchema=new mongoose.Schema({

    email:{
    
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
    })
    //collection
    const Loginuser=mongoose.model("Loginuser",loginUserSchema)

    module.exports.Loginuser=Loginuser;