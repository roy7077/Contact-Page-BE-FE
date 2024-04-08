const { query } = require('express');
const {mailSender}=require('../Utils/mailSender');

const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    query:{
        type:String,
        required:true,
    }
})

userSchema.post('save', function(doc, next) {
    mailSender(doc);
    next();
  });

module.exports=mongoose.model("UserData",userSchema);