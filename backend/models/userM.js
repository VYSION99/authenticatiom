const mongoose = require('mongoose');
const passportLocalMongoose =require('passport-local-mongoose');

const UserShcema = mongoose.Schema();
 const User = new UserShcema({
    email:{
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
    FirstNmae:{
        type:String,
        required: true
    },
    Date:{
        type:Date.now,
        required:true
        
    }
 });
 User.plugin(passportLocalMongoose);
 module.exports.User = mongoose.model('Auth',User);