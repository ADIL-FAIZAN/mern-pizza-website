const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
const {Menudata}=require("../models/menudata")
const {auth}=require("../middleware/auth")

router.get("/",async (req,res)=>{


const menu=await Menudata
.find()
res.send(menu)

})




router.post("/",async (req,res)=>{

const menu=new Menudata({
title:req.body.title,

description:req.body.description,
image:req.body.image,
categoryname:req.body.categoryname,
options:req.body.options,
varients:req.body.varients
})

const menudata=await menu.save()
res.send(menudata)
})

module.exports=router;