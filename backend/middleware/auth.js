module.exports ={
    loggedIn : (req,res,next)=>{
        if(req.isAuthenticated()){
            return next()
        }else{
            res.redirect('/login')
        }
    },
    loggedGust: (req,res,next)=>{
        if(req.isAuthenticated()){
         res.redirect('/dashboard')
        }else{
            return next();
        }
    }
}