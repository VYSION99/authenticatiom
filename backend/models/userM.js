const mongoose = require('mongoose');
const passportLocalMongoose =require('passport-local-mongoose');

const Schema = mongoose.Schema;
 const User = new Schema({
    FullName:{
       type:String,
        required:true
    },
    username:{
        type:String,
        required: true,
        unique:true,
    },
LastName:{
        type:String,
        required: true
    },
    FirstName:{
        type:String,
        required: true
    },
    Date:{
        type:Date,
        default:Date.now
        
    }
 });
 User.plugin(passportLocalMongoose);
 module.exports.User = mongoose.model('Auth',User);