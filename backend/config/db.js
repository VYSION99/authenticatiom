const mongoose = require('mongoose');

const connectDB = async ()=>{
    mongoose.set('strictQuery',false);
        try { 
            const con = await mongoose.connect(process.env.MONGOURL,{
                useNewUrlParser: true, useUnifiedTopology: true, 
            });
            console.log(` mongoDb connected ${con.connection.host}`);
        } catch (error) {
            console.log(error);  
            process.exit(1)
        }  
    }    
    
    exports.MongoDB= connectDB;    