const express = require('express');
const passport = require('passport');
const User = require('/models/userM.js')


const router = express.Router();


router.get('/dashboard',(req,res)=>{
    res.render('home',{
        title:'authenticating'
    })
});
router.get('/login',(req,res)=>{
    res.render('login')
});
router.get('/register',(req,res)=>{
    res.render('register')
});
router.post('/login',(req,res)=>{
});

router.post('/register',(req,res)=>{
  const user ={ 
    Username:req.body.username,
    Email:req.body.Email,
    FirstName:req.body.FirstName,
    LastName:req.body.Lastname,
}
   
})










module.exports = router;