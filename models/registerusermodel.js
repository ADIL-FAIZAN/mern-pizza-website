const mongoose=require('mongoose')
const jwt=require("jsonwebtoken")

//RegisteruserSchema
const registerUserSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
    
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

    registerUserSchema.methods.generateAuthToken=function(){
   
        const token= jwt.sign({_id:this._id}, 'jwtprivatekey');
        return token
     }
    


   
    //collection
    const Registeruser=mongoose.model("Registeruser",registerUserSchema)




    module.exports.registeruser=Registeruser;