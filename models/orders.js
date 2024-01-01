const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    
  useremail:{
    type:String,
    required:true
  },


  products: [
    {
       product:{
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        image: {
          type: String,
        },
     
      
    }, 
    quantity:{
      type: Number, 
    },  
    totalprice: {
      type: Number,
     
    }, 
    size: {
      type: String,
      enum: ["small", "medium", "large"],
    },
}],

})  
const Ordermodel = mongoose.model('Order', orderSchema);
module.exports.Ordermodel = Ordermodel;
