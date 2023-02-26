const express = require('express');



const Router = express.Router();


Router.get('/dashboard',(req,res)=>{
    res.render('home',{
        title:'authenticating'
    })
});
Router.get('/login',(req,res)=>{
    res.render('login')
});
Router.get('/register',(req,res)=>{
    res.render('register')
});
Router.post('/login',(req,res)=>{
});

Router.post('/register',(req,res)=>{
  
    console.log(req.params)
    console.log(req.body)
})










module.exports = Router;