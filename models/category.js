const mongoose=require("mongoose");


const categorySchema=new mongoose.Schema({

    categoryName:{
    
        type:String,
        required:true
    }
    
    })
    //collection
    const Categoryname=mongoose.model("Categoryname",categorySchema)

    module.exports.Categoryname=Categoryname;