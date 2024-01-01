const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
const {Menudata  } = require('../models/menudata'); 


router.post("/", async(req,res)=>{


    const updateddata=req.body.updateddata
    const data=await Menudata.findOne({_id:updateddata.PizzaId})



data.title=updateddata.title,
data.description=updateddata.description,
data.image=updateddata.image,
data.categoryname=updateddata.categoryname,
data.options[0]['small']=updateddata.small,
data.options[0]['medium']=updateddata.medium,
data.options[0]['large']=updateddata.large,


await data.save()



res.send(data)




})



module.exports=router