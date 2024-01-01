const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
const { Ordermodel } = require('../models/orders'); 


router.post("/", async(req,res)=>{



const data=await Ordermodel.findOne({useremail:req.body.email})
res.send(data)




})



module.exports=router