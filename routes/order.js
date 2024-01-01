const mongoose=require("mongoose");
const express = require('express');
const router = express.Router();
//const {OrderModel}=require('../models/orders')
const { Ordermodel } = require('../models/orders'); 

router.post("/", async(req,res)=>{

const alreadyexist=await Ordermodel.findOne({useremail:req.body.currentuseremail})


if(alreadyexist===null){

const postdata=new Ordermodel({
useremail:req.body.currentuseremail,
products:req.body.userCartItems,

})
const result=await postdata.save()
res.send(result)

}
else{
await Ordermodel.findOneAndUpdate({useremail:req.body.currentuseremail},
{$push:{products:req.body.userCartItems}},
).then(res=>{
    res.send(res.data)
    //console.log(res.data)
})
.catch(err=>res.send(err.message))
}})

module.exports=router