const  express = require('express');
const cors = require('cors');
const helmet = require ('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const {engine}= require('express-handlebars');
const  mongoDB=require('./config/db');
const router = require('./Routes/route')


dotenv.config({path:"./config/env.env"})
mongoDB.MongoDB();
const app = express();
app.use(router);


// declearing the env file

// setting app use state../
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,"public")))


// configing handlebars wengines
app.engine('.hbs',engine({defaultLayout:'home',extname:'.hbs'}));
app.set('view engine','.hbs')









const port = process.env.port || 2025;


app.listen(port, ()=>{
    console.log(`server runnning smoothly on ${process.env.NODE_ENV} mode in port ${port}`);
})
