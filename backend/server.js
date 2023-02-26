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
//static folder
app.use(express.static(path.join(__dirname ,"public")));
// setting app use state../
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// morgan
if(process.env.NODE_ENV === "development"){ app.use(morgan("dev"))};



// configing handlebars wengines
app.engine('.hbs',engine({defaultLayout:'home',extname:'.hbs'}));
app.set('view engine','.hbs')
// declearing the env file






const port = process.env.port || 2025;
app.use(router);


app.listen(port, ()=>{
    console.log(`server runnning smoothly on ${process.env.NODE_ENV} mode in port ${port}`);
})
