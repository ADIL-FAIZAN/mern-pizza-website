
const express = require('express');
const router = express.Router();
const {registeruser}=require('../models/registerusermodel')
const registeruserSchema=require("../validation/registeruser")
const validate =require("../middleware/validateuser")
const bcrypt=require("bcrypt")


router.post("/",validate(registeruserSchema),async (req,res)=>{

const salt=await bcrypt.genSalt(10)
const hash=await bcrypt.hash(req.body.password,salt)
//user exist logic

const usernoteligible=await registeruser.findOne({email:req.body.email})
if (usernoteligible) {
  return  res.status(409).send('This email is already registered');
   // return res.send("This Email already registered"); // Add return statement here
  }
const postdata=new registeruser({

    username:req.body.username,
    email:req.body.email,
    password:hash,
    //isAdmin:req.body.isAdmin
})

const result=await postdata.save()

const token = result.generateAuthToken();
res.header('x-auth',token).send(token)

})


router.get("/",async (req,res)=>{

const get=await registeruser.find()

res.send(get)




})







module.exports=router