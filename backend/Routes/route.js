const express = require('express');
const passport = require('passport');
const {User} = require('../models/userM.js')
const EnsureLogin = require('connect-ensure-login').ensureLoggedIn();
//const {loggedIn, loggedGust} = require('../middleware/auth')


const router = express.Router();

// home route
router.get('/dashboard',EnsureLogin,(req,res)=>{
    res.render('home',{
        title:'story Portal',
        user :req.user,  
    })
});

//....login route ....//
router.get('/login',(req,res)=>{ 
    res.render('login')
}); 
router.get('/register',(req,res)=>{
    res.render('register')
});
router.post('/login',(req,res,next)=>{
passport.authenticate('local', (err,user,info)=>{
    if(err){return next(err)}
    if(!user){
        res.status('400').json(' wrong email or password')
    }
    req.login(user, (err)=>{
        if(err){return next(err)}else{
             console.log(req.user);  
        return res.redirect('/dashboard')
        }
    })
})(req,res,next);

//console.log(req.session)
});

router.post('/register',(req,res,next)=>{
    
  const user ={ 
    FullName:req.body.LastName + " "+req.body.FirstName,
    username:req.body.Email,
    FirstName:req.body.FirstName,
    LastName:req.body.LastName,
}
console.log(req.body);
   User.register(new User(user),req.body.password,(err,user)=>{
if(err){
    return res.render('register');
}else{
   req.login(user,(err)=>{
if(err){return next(err);}  
return res.redirect('/dashboard');
   })
}
});
});










module.exports = router;  