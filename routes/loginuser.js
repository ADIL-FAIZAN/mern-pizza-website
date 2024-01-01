const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
const {Loginuser}=require('../models/loginusermodel')
const bcrypt=require("bcrypt")
const {registeruser}=require("../models/registerusermodel")
const Joi = require('joi');

//Routes
router.post("/",async (req,res)=>{


  const { error } = validateLogin(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

   
const validateUser=await registeruser.findOne({email:req.body.email})
if(!validateUser){ return res.status(400).send('Invalid Email')}

const validatePassword=await bcrypt.compare(req.body.password,validateUser.password)
if(!validatePassword){ return res.status(400).send('Invalid Password')}

await validateUser.generateAuthToken()

try{

    const currentUser={
      userid:validateUser._id,
      name:validateUser.username,
      email:validateUser.email,
      isAdmin:validateUser.isAdmin,
      
    }
    res.send(currentUser)


//return console.log(result)
}
catch(error){
  console.log("Error in login try-catch block:",error)
}




function validateLogin(Register) {
  const schema = {
  
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(30).required()
  };
   return Joi.object(schema).validate(Register);
}




})
module.exports=router
//module.exports.currentUser=currentUser