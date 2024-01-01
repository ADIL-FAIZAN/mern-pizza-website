const mongoose=require('mongoose')

//RegisteruserSchema
const menuSchema=new mongoose.Schema({

    title:{
    
        type:String,
       
    },
    
    description:{
    type:String,
  

    },
    image:{
        type: String, 
        
      },
      
    categoryname:{
        type:String,
       
    },
    options: [
        {
            half: String,
            full:  String,
            small:  String,  // Add small, medium, and large with appropriate values
            medium:  String,
            large: String
        
        }],

        varients:{
            type:[String],
            default:["small","medium","large"]

        }
 })
    //collection
    const Menudata=mongoose.model("Menudata",menuSchema)

    module.exports.Menudata=Menudata;