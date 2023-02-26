const mongoose = require('mongoose');
const passportLocalMongoose =require('passport-local-mongoose');

const UserShcema = mongoose.Schema();
 const User = new UserShcema({
    email:{
        String,
        required:true
    },
    username:{
        String,
        required: true
    },
    password: String,
 });
 User.plugin(passportLocalMongoose);
 module.exports.User = mongoose.model('User',User);