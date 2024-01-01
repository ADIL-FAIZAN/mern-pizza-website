const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
const {Menudata  } = require('../models/menudata'); 


router.post("/", async(req,res)=>{



const data=await Menudata.findOne({_id:req.body.PizzaId})
res.send(data)




})



module.exports=router