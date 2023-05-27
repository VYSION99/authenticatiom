const  express = require('express');
const mongoose =require('mongoose')
const cors = require('cors');
const morgan = require('morgan');
const {engine}= require('express-handlebars');
const cookieParser = require('cookie-parser');
const Session = require('express-session');
const MongoStore =require('connect-mongo')
const helmet = require ('helmet');
const dotenv = require('dotenv');
const path = require('path');
const  mongoDB=require('./config/db');
const router = require('./Routes/route');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('./models/userM');



// config .env file
dotenv.config({path:"./config/env.env"})

//mongoose DB
mongoDB.MongoDB();
const app = express();
//static folder
app.use(express.static(path.join(__dirname ,"public")));

// setting body parser../
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// morgan
if(process.env.NODE_ENV === "development"){ app.use(morgan("dev"))};



// configing handlebars wengines
app.engine('.hbs',engine({defaultLayout:'home',extname:'.hbs'}));
app.set('view engine','.hbs')
// declearing the env file

// .. app configuration settings on security...........///
app.use(cors({origin:true}));
app.use(helmet());
app.use(cookieParser());
app.use(Session({
    secret:'codecamps',
    resave:false,
    saveUninitialized:true,
    store: MongoStore.create({mongoUrl:process.env.MONGOURL})
}));


// .....passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());








const port = process.env.port || 2025;
app.use(router);


app.listen(port, ()=>{  
    console.log(`server runnning smoothly on ${process.env.NODE_ENV} mode in port ${port}`);
})
