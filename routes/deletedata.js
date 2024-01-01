const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
const {Menudata  } = require('../models/menudata'); 


router.post("/", async(req,res)=>{



const data=await Menudata.findByIdAndDelete({_id:req.body.id})
res.send(data)




})



module.exports=router