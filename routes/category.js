const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
const {Categoryname}=require('../models/category')


router.post("/", async(req,res)=>{

const postdata=new Categoryname({

categoryName:req.body.categoryName

})
const result=await postdata.save()
res.send(result)

})

router.get("/", async(req,res)=>{

 const data=await Categoryname.find()

 res.send(data)


})
module.exports=router